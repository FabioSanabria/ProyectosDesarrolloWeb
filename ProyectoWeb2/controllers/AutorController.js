const autor = require('../models').Autor;

class AutorController {

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
            res.redirect('/publicaciones');
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
            res.redirect('/administracion');
        } catch (err) {
            console.log(err);
        }
    }

    async eliminarAutor(req, res) {
        try {
            await autor.destroy({
                where: { ID: req.params.id }
            });
            res.redirect('/administracion');
        } catch (err) {
            console.log(err);
        }
    }

    async autenticarAutor(req, res) {
        try {
            const autorObtenible = await autor.findOne({
                where: {
                    Nombre: req.body.Nombre,
                    Contrasena: req.body.Contrasena
                }
            });
            if (autorObtenible) {
                autorId = autorObtenible.ID;
                nombre = autorObtenible.Nombre
                autorTipo = autorObtenible.Tipo;
                req.session.user_data = { autorId, nombre, autorTipo };
                res.redirect('/publicaciones');
            } else {
                res.render('../views/loginError');
            }
        } catch (err) {
            console.log(err);
        }
    }

    async administrarAutores(req, res) {
        try {
            res.render('../views/administracion');
        } catch (err) {
            console.log(err);
        }
    }

    async ingresarAutor(req, res) {
        try {
            res.render('../views/login');
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = AutorController;
