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
}

module.exports = PublicacionController;
