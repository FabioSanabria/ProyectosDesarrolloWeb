'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Categoria.hasMany(models.Publicacion, {
            foreignKey: 'categoriaId' // Define la clave foránea en la tabla Publicacion que hace referencia al ID del Autor
        });
    }
  }
  Categoria.init({
    Nombre: DataTypes.STRING,
  }, {
    sequelize,
      modelName: 'Categoria',
      freezeTableName: true
  });
  return Categoria;
};