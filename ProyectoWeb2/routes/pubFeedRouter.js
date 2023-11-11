const express = require('express');
const router = express.Router();
const PublicacionController = require('../controllers/publicacionController');
const AutorController = require('../controllers/AutorController');
const CategoriaController = require('../controllers/CategoriaController');

const publicacionController = new PublicacionController();
const autorController = new AutorController();
const categoriaController = new CategoriaController();

// Ruta para obtener todos los autores.
router.get('/', autorController.obtenerTodosLosAutores);

// Ruta para obtener todas las categorias.
router.get('/', categoriaController.obtenerTodasLasCategorias);

// Ruta para obtener todas las publicaciones.
router.get('/', publicacionController.obtenerTodasLasPublicaciones);

// Ruta para obtener el usuario de al sesion.
router.get('/', publicacionController.enviarUsuarioDeLaSesion);

// Ruta para obtener las publicaciones páginadas.
router.get('/paginadas', publicacionController.obtenerPublicacionesPaginadas);

module.exports = router;
