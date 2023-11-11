const Publicacion = require('../models').Publicacion;

class PublicacionController {


    async obtenerTodasLasPublicaciones(req, res) {
        try {
            const publicaciones = await Publicacion.findAll();
            autorTipo = req.session.autorTipo;
            res.render('../views/publicaciones', { publicaciones , autorTipo });
        } catch (err) {
            console.log(err);
        }
    }

    async crearPublicacion(req, res) {
        try {
            await Publicacion.create({
                Fecha: req.body.Fecha,
                Titulo: req.body.Titulo,
                Imagen: req.body.Imagen,
                Texto: req.body.Texto,
                autorId: req.body.autorId,
                categoriaId: req.body.categoriaId
            });
            res.redirect('../publicaciones');
        } catch (err) {
            console.log(err);
        }
    }

    async obtenerPublicacionesDeUnAutor(req, res) {
        try {
            const publicaciones = await Publicacion.findAll({
                raw: true,
                where: { autorId: req.params.id },
                order: [['Fecha', 'DESC']]
            });
            res.render('../views/autor', { publicaciones });
        } catch (err) {
            console.log(err);
        }
    }

    async obtenerPublicacionesMasRecientes(req, res) {
        try {
            const publicaciones = await Publicacion.findAll({
                raw: true,
                order: [['Fecha', 'DESC']]
            });
            res.render('../views/publicaciones', { publicaciones });
        } catch (err) {
            console.log(err);
        }
    }

    async eliminarPublicacionesDeUnAutor(req, res) {
        try {
            await Publicacion.destroy({
                where: { autorId: req.params.autorId }
            });
            res.redirect('../views/administracion');
        } catch (err) {
            console.log(err);
        }
    }

    async obtenerNombreDelAutorDeUnaPublicacion(req, res) {
        try {
            const publicacion = await Publicacion.findByPk(publicacionId);

            if (publicacion) {
              const autor = await publicacion.getAutor();
            
              if (autor) {
                res.render('../views/autor', { autor });
              } else {
                console.log('No se encontró el autor de esta publicación.');
              }
            } else {
              console.log('La publicación no se encontró.');
            }
        } catch (err) {
            console.log('Error al obtener el autor de la publicación.');
        }
    }

    async mostrarPublicacionIndividual(req, res) {
        try {
            // Obtener la publicaci�n por su ID
            const publicacion = await Publicacion.findOne({
                where: { ID: req.params.id }
            });

            if (!publicacion) {
                // Manejar caso en el que la publicaci�n no se encuentra
                return res.status(404).send('Publicaci�n no encontrada');
            }

            // Renderiza una vista EJS para mostrar la publicaci�n individual
            res.render('../views/publicacion_completa', { publicacion });
        } catch (err) {
            console.log(err);
            res.status(500).send('Error al obtener la publicaci�n');
        }
    }

    async obtenerPublicacionesPaginadas(req, res) {
        // P�gina actual (Por defecto 1)
        const page = req.query.page || 1;
         // Publicaciones por p�gina (Por Defecto 5)
        const perPage = parseInt(req.query.perPage) || 5;

        try {
            const offset = (page - 1) * perPage;

            // Obtener las publicaciones paginadas
            const publicaciones = await Publicacion.findAll({
                raw: true,
                order: [['Fecha', 'DESC']],
                limit: perPage,
                offset: offset,
            });

            // Calcular el n�mero total de p�ginas
            const totalPublicaciones = await Publicacion.count();
            const totalPages = Math.ceil(totalPublicaciones / perPage);

            res.json({
                publications: publicaciones,
                totalPages: totalPages,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al obtener las publicaciones paginadas' });
        }
    }

    async obtenerPublicacionesPorCategoria(req, res) {
        try {
            const nombreCategoria = req.params.nombreCategoria;

            // Verificar si la categoría existe
            const categoria = await Categoria.findOne({
                where: { Nombre: nombreCategoria }
            });

            if (!categoria) {
                return res.status(404).send('Categoría no encontrada');
            }

            // Obtener las publicaciones asociadas a la categoría
            const publicaciones = await Publicacion.findAll({
                where: { categoriaId: categoria.id },
                order: [['Fecha', 'DESC']]
            });

            res.render('../views/publicaciones', { publicaciones, categoria });
        } catch (err) {
            console.log(err);
            res.status(500).send('Error al obtener las publicaciones por categoría');
        }
    }

    async mostrarCrearPublicacion(req, res) {
        try {
            res.render('../views/crearPublicacion');
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = PublicacionController;
