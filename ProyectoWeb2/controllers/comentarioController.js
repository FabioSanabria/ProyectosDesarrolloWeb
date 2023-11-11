const comentario = require('../models').Comentario;

class ComentarioController {
    async obtenerComentariosDeUnaPublicacion(req, res) {
        try {
            const comentariosPublicacion = await comentario.findAll({
                where: { publicacionId: req.params.publicacionId }
            });
            res.render('../views/comentarios', { comentariosPublicacion });
        } catch (err) {
            console.log(err);
        }
    }

    async crearComentario(req, res) {
        try {
            await comentario.create({
                Texto: req.body.Texto,
                Correo: req.body.Correo,
                publicacionId: req.body.publicacionId
            });
            res.redirect(`../comentarios/${req.body.publicacionId}`);
        } catch (err) {
            console.log(err);
        }
    }

    async cantidadComentariosDeUnaPublicacion(req, res) {
        try {
            const cantidadComentarios = await comentario.count({
                where: { publicacionId: req.params.publicacionId }
            });
            res.render('../views/comentarios', { cantidadComentarios });
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = ComentarioController;
