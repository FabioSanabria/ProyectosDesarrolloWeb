// Modelo de Comentario
import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Comentario = db.define('comentarios', {
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
    },
    publicacionId: {
        type: Sequelize.INTEGER // Clave foránea para establecer la relación
    }
});

Comentario.belongsTo(Publicacion, {
    foreignKey: 'publicacionId' // Indicar la relación con la tabla Publicacion
});
