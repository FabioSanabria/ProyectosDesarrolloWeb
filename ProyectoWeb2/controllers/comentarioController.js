// TODO: Revisar si los comentarios requieren de una llave foranea a la tabla Autor
const comentarios = require('../models/comentarios');
const { raw } = require('mysql2');

const obtenerComentariosDeUnaPublicacion = async (req, res) => {
    const comentariosPublicacion = await comentarios.findAll({
        raw: true,
        where: {
            publicacionId: req.params.publicacionId
        }
    }).catch(err => console.log(err));
    await res.render('/comentarios', {comentariosPublicacion});
}

const crearComentario = async (req, res) => {
    await comentarios.create({
        Texto: req.body.Texto,
        Correo: req.body.Correo,
        publicacionId: req.body.publicacionId
    }).catch(err => console.log(err));
    await res.redirect('/comentarios');
}