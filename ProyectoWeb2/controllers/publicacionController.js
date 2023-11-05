const publicacion = require('../models/publicacion');
const { raw } = require('mysql2');

const obtenerTodasLasPublicaciones = async (req, res) => {
    const publicaciones = await publicacion.findAll({
        raw : true
    }).catch(err => console.log(err));
    await res.render('../views/publicaciones.ejs', {publicaciones});
}

const crearPublicacion = async (req, res) => {
    await publicacion.create({
        Fecha: req.body.Fecha,
        Titulo: req.body.Titulo,
        Categoria: req.body.Categoria,
        Imagen: req.body.Imagen,
        Texto: req.body.Texto,
        autorId: req.body.autorId
    }).catch(err => console.log(err));
    await res.redirect('/publicaciones');
}

const obtenerPublicacionesDeUnAutor = async (req, res) => {
    const publicaciones = await publicacion.findAll({
        raw: true,
        where: {
            autorId: req.params.autorId
        }
    }).catch(err => console.log(err));
    await res.render('/publicaciones', {publicaciones});
}

const obtenerPublicacionesMasRecientes = async (req, res) => {
    const publicaciones = await publicacion.findAll({
        raw: true,
        order: [
            ['Fecha', 'DESC']
        ]
    }).catch(err => console.log(err));
    await res.render('/publicaciones', {publicaciones});
}

const eliminarPublicacionesDeUnAutor = async (req, res) => {
    await publicacion.destroy({
        where: {
            autorId: req.params.autorId
        }
    }).catch(err => console.log(err));
    await res.redirect('/publicaciones');
}

module.exports = {
    obtenerTodasLasPublicaciones,
    crearPublicacion,
    obtenerPublicacionesDeUnAutor,
    obtenerPublicacionesMasRecientes,
    eliminarPublicacionesDeUnAutor
};