const Publicacion = require('../models').Publicacion;

class PublicacionController {
    async obtenerTodasLasPublicaciones(req, res) {
        try {
            const publicaciones = await Publicacion.findAll();
            res.render('../views/publicaciones', { publicaciones });
        } catch (err) {
            console.log(err);
        }
    }

    async crearPublicacion(req, res) {
        try {
            await Publicacion.create({
                Fecha: req.body.Fecha,
                Titulo: req.body.Titulo,
                Categoria: req.body.Categoria,
                Imagen: req.body.Imagen,
                Texto: req.body.Texto,
                autorId: req.body.autorId
            });
            res.redirect('../views/publicaciones');
        } catch (err) {
            console.log(err);
        }
    }

    async obtenerPublicacionesDeUnAutor(req, res) {
        try {
            const publicaciones = await Publicacion.findAll({
                raw: true,
                where: { autorId: req.params.autorId }
            });
            res.render('../views/publicaciones', { publicaciones });
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
            res.redirect('../views/publicaciones');
        } catch (err) {
            console.log(err);
        }
    }

    async obtenerPublicacionesPaginadas(req, res) {
        // Página actual (Por defecto 1)
        const page = req.query.page || 1;
         // Publicaciones por página (Por Defecto 5)
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

            // Calcular el número total de páginas
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
}

module.exports = PublicacionController;
