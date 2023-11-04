import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Autor = db.define('autor', {
    // ID identificador del autor
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Nombre del autor
    NombreP: {
        type: Sequelize.STRING
    },
    // Apellido del autor
    Apellido: {
        type: Sequelize.STRING
    },
    // Contraseña del autor
    Contraseña: {
        type: Sequelize.STRING
    },
    // Tipo de autor, ya sea administrador o autor comun y corriente
    Tipo: {
        type: Sequelize.STRING
    }
});

Autor.hasMany(Publicacion, {
    foreignKey: 'autorId' // Definir la clave foránea en la tabla Publicacion
});