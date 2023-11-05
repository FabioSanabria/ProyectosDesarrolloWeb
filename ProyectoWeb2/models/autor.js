const Sequelize = require('sequelize');
const db = require('../config/db');
const Publicacion = require('./publicacion'); // Importa el modelo de Publicacion si no se ha importado

const Autor = db.define('autor', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NombreP: {
        type: Sequelize.STRING
    },
    Apellido: {
        type: Sequelize.STRING
    },
    Contraseña: {
        type: Sequelize.STRING
    },
    Tipo: {
        type: Sequelize.STRING
    }
});

// Definir la asociación entre Autor y Publicacion si es una relación uno-a-muchos (un autor tiene muchas publicaciones)
Autor.hasMany(Publicacion, {
    foreignKey: 'autorId' // Definir la clave foránea en la tabla Publicacion que hace referencia al ID del Autor
});

module.exports = Autor;
