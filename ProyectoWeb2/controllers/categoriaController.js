const categoria = require('../models').Categoria;

class CategoriaController {
    async obtenerTodasLasCategorias(req, res) {
        try {
            const categorias = await categoria.findAll();
            res.render('../views/publicaciones', { categorias });
        } catch (err) {
            console.log(err);
        }
    }
    
    async obtenerCategoriaPorNombre(req, res) {
        try {
            const categoriaObtenible = await categoria.findByPk(req.params.nombre);
            res.render('../views/categoria', { categoriaObtenible });
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = CategoriaController;
