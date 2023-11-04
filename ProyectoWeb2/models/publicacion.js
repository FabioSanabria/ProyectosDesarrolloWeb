import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Publicacion = db.define('publicaciones', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Fecha: {
        type: Sequelize.DATE
    },
    Titulo: {
        type: Sequelize.STRING
    },
    Categoria: {
        type: Sequelize.STRING
    },
    Imagen: {
        type: Sequelize.STRING
    },
    Texto: {
        type: Sequelize.TEXT
    },
    autorId: {
        type: Sequelize.INTEGER // Clave foránea para establecer la relación
    }
});

Publicacion.belongsTo(Autor, {
    foreignKey: 'autorId' // Indicar la relación con la tabla Autor
});

Publicacion.hasMany(Comentario, { foreignKey: 'publicacionId' }); // Relación con Comentario
