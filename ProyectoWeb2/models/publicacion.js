const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Publicacion extends Model {
    static associate(models) {
      Publicacion.belongsTo(models.Autor, {
        foreignKey: 'autorId' // Indicar la relación con la tabla Autor
      });
        Publicacion.belongsTo(models.Categoria, {
            foreignKey: 'categoriaId' // Indicar la relación con la tabla Categoria
      });
      Publicacion.hasMany(models.Comentario, { foreignKey: 'publicacionId' }); // Relación con Comentario
    }
  }

  Publicacion.init({
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Fecha: {
      type: DataTypes.DATE
    },
    Titulo: {
      type: DataTypes.STRING
    },
    Imagen: {
      type: DataTypes.STRING
    },
    Texto: {
      type: DataTypes.TEXT
    },
    autorId: {
      type: DataTypes.INTEGER // Clave foránea para establecer la relación
    },
    categoriaId: {
      type: DataTypes.INTEGER // Clave foránea para establecer la relación
    }
  }, {
    sequelize,
      modelName: 'Publicacion',
      freezeTableName: true
  });

  return Publicacion;
};
