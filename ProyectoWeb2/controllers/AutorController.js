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
                Nombre: req.body.nombre,
                Apellido: req.body.apellido,
                Contrasena: req.body.contraseña,
                Tipo: req.body.tipo
            });
            res.redirect('../views/autor');
        } catch (err) {
            console.log(err);
        }
    }

    async actualizarAutor(req, res) {
        try {
            await autor.update({
                Nombre: req.body.nombre,
                Apellido: req.body.apellido,
                Contrasena: req.body.contraseña,
                Tipo: req.body.tipo,
            }, {
                where: { ID: req.params.id }
            });
            res.redirect('../views/autor');
        } catch (err) {
            console.log(err);
        }
    }

    async eliminarAutor(req, res) {
        try {
            await autor.destroy({
                where: { ID: req.params.id }
            });
            res.redirect('../views/autor');
        } catch (err) {
            console.log(err);
        }
    }

    async autenticarAutor(req, res) {
        try {
            const autorObtenible = await autor.findOne({
                where: {
                    Nombre: req.body.nombre,
                    Contrasena: req.body.contrasena
                }
            });
            if (autorObtenible) {
                req.session.autorId = autorObtenible.ID;
                req.session.nombre = autorObtenible.Nombre
                req.session.autorTipo = autorObtenible.Tipo;
                res.redirect('../views/index');
            } else {
                res.render('../views/login', { error: 'Usuario o contraseña incorrectos' });
            }
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = AutorController;
