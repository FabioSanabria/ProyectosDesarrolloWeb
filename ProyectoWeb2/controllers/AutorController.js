// Suponiendo que estás utilizando Express.js
const { raw } = require('mysql2');
const { autor } = require('../models/autor'); // Importa el modelo de Autor

// Suponiendo que 'Autor' es tu modelo de Sequelize para autores

const obtenerTodosLosAutores = async (req, res) => {
    const autores = await autor.findAll(    {
        raw : true
    }).catch(err => console.log(err));
    // TODO: Cambiar el nombre de la vista a autores porque no se como se llama el lugar donde va a tener los
    // autores(Juan)
    await res.render('autores', {autores});
}

const obtenerAutorPorId = async (req, res) => {
    const autorObtenible = await autor.findByPk(req.params.id).catch(err => console.log(err));
    await res.render('autor', {autorObtenible});
}

const crearAutor = async (req, res) => {
    await autor.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        contraseña: req.body.contraseña,
        
    }).catch(err => console.log(err));
    await res.redirect('/autores');
}

const actualizarAutor = async (req, res) => {
    await autor.update({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        contraseña: req.body.contraseña,
    }, {
        where: { id: req.params.id }
    }).catch(err => console.log(err));
    await res.redirect('/autores');
}

const eliminarAutor = async (req, res) => {
    await autor.destroy({
        where: { id: req.params.id }
    }).catch(err => console.log(err));
    await res.redirect('/autores');
}

module.exports = {
    obtenerTodosLosAutores,
    obtenerAutorPorId,
    crearAutor,
    actualizarAutor,
    eliminarAutor
};
