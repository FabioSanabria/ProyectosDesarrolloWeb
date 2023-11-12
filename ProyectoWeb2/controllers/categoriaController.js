const categoria = require('../models').Categoria;

class CategoriaController {
    
    async obtenerCategoriaPorNombre(req, res) {
        try {
            const categoriaObtenible = await categoria.findByPk(req.params.nombre);
            res.render('../views/categoria', { categoriaObtenible });
        } catch (err) {
            console.log(err);
        }
    }
    static async obtenerIdCategoriaPorNombre(nombreCategoria) {
        try {
            const categoriaObtenible = await categoria.findOne({
                where: { Nombre: nombreCategoria }
            });

            if (categoriaObtenible) {
                console.log('Categoria id en el categoria controller:' + categoriaObtenible.id);
                return categoriaObtenible.id; // Return the ID as an integer
            } else {
                console.log('No se encontr� la categor�a con el nombre proporcionado.');
                return null;
            }
        } catch (err) {
            console.log(err);
            return null;
        }
    }

}

module.exports = CategoriaController;
