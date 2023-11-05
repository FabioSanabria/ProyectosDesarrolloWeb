const Sequelize = require('sequelize');
const db = require('../config/db');
const Publicacion = require('./publicacion'); // Asegúrate de importar el modelo Publicacion

const Comentario = db.define('comentarios', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Correo: {
        type: Sequelize.STRING
    },
    Texto: {
        type: Sequelize.TEXT
    }
});

// Definir la relación entre Comentario y Publicacion
Comentario.belongsTo(Publicacion, {
    foreignKey: 'publicacionId' // Clave foránea para establecer la relación con la tabla Publicacion
});

module.exports = Comentario;
