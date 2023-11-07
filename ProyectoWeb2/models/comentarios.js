const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    static associate(models) {
      Comentario.belongsTo(models.Publicacion, {
        foreignKey: 'publicacionId' // Clave foránea para establecer la relación con la tabla Publicacion
      });
    }
  }

  Comentario.init({
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Correo: {
      type: DataTypes.STRING
    },
    Texto: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
      modelName: 'Comentario',
      freezeTableName: true
  });

  return Comentario;
};
