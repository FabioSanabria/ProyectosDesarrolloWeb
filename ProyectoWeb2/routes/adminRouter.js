const express = require('express');
const router = express.Router();
const AutorController = require('../controllers/AutorController');
const CategoriaController = require('../controllers/CategoriaController');

const autorController = new AutorController();
const categoriaController = new CategoriaController();

// Rutas para el controlador de autor
router.get('/:id', autorController.obtenerAutorPorId);
router.post('/', autorController.crearAutor);
router.put('/:id', autorController.actualizarAutor);
router.delete('/:id', autorController.eliminarAutor);
router.delete('/:id', categoriaController.eliminarPublicacionesDeUnAutor);

module.exports = router;
