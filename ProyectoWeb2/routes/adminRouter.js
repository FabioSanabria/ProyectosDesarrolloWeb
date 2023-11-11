const express = require('express');
const router = express.Router();
const AutorController = require('../controllers/AutorController');
const PublicacionController = require('../controllers/PublicacionController');

const autorController = new AutorController();
const publicacionController = new PublicacionController();

router.get('/', autorController.administrarAutores);
router.post('/', autorController.crearAutor);
router.put('/:id', autorController.actualizarAutor);
router.delete('/:id', autorController.eliminarAutor);
router.delete('/:id', publicacionController.eliminarPublicacionesDeUnAutor);

module.exports = router;
