const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    static associate(models) {
      // Define association here
      Autor.hasMany(models.Publicacion, {
        foreignKey: 'autorId' // Define la clave foránea en la tabla Publicacion que hace referencia al ID del Autor
      });
    }
  }

  Autor.init({
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    NombreP: {
      type: DataTypes.STRING
    },
    Apellido: {
      type: DataTypes.STRING
    },
    Contraseña: {
      type: DataTypes.STRING
    },
    Tipo: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
      modelName: 'Autor',
      freezeTableName: true
  });

  return Autor;
};
