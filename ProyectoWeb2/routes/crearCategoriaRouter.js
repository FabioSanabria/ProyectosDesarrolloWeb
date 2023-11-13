const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/categoriaController');

const categoriaController = new CategoriaController();

// Ruta para crear una publicación.
router.get('/', categoriaController.mostrarCrearCategoria);
router.post('/', categoriaController.crearCategoria);

module.exports = router;