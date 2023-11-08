const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Categoria extends Model {
        static associate(models) {
            Categoria.hasMany(models.Publicacion, {
                foreignKey: 'categoriaNombre'
            });
        }
    }

    Categoria.init({
        Nombre: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        Descripcion: {
            type: DataTypes.TEXT
        }
    }, {
        sequelize,
        modelName: 'Categoria',
        freezeTableName: true
    });

    return Categoria;
}