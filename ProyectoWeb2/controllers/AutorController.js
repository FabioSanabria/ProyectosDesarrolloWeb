const autor = require('../models').Autor;

class AutorController {

    async obtenerTodosLosAutores(req, res) {
        try {
            const autores = await autor.findAll();
            res.render('../views/publicaciones', { autores });
        } catch (err) {
            console.log(err);
        }
    }

    async obtenerAutorPorId(req, res) {
        try {
            const autorObtenible = await autor.findByPk(req.params.id);
            res.render('../views/autor', { autorObtenible });
        } catch (err) {
            console.log(err);
        }
    }

    async crearAutor(req, res) {
        try {
            await autor.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                contraseña: req.body.contraseña,
            });
            res.redirect('../views/autor');
        } catch (err) {
            console.log(err);
        }
    }

    async actualizarAutor(req, res) {
        try {
            await autor.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                contraseña: req.body.contraseña,
            }, {
                where: { id: req.params.id }
            });
            res.redirect('../views/autor');
        } catch (err) {
            console.log(err);
        }
    }

    async eliminarAutor(req, res) {
        try {
            await autor.destroy({
                where: { id: req.params.id }
            });
            res.redirect('../views/autor');
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = AutorController;
