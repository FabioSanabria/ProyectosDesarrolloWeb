const Publicacion = require('../models').Publicacion;
const autor = require('../models').Autor;
const categoria = require('../models').Categoria;

class FeedController {
    async obtenerFeed(req, res) {
        try {
            console.log("Usuario de la sesión:", req.session.user_data);
            const user = req.session.user_data;
            const autores = await autor.findAll();
            const categorias = await categoria.findAll();
            const publicaciones = await Publicacion.findAll();
            res.render('../views/publicaciones', { user, autores, categorias, publicaciones });
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = FeedController;
