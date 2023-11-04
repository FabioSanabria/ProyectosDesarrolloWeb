'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Publicacion', {
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
        type: Sequelize.INTEGER,
        references: {
          model: 'Autor', // Nombre de la tabla referenciada
          key: 'ID' // Clave primaria de la tabla referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('publicaciones');
  }
};
