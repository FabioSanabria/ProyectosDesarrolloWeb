const express = require('express');
const router = express.Router();
const PublicacionController = require('../controllers/publicacionController');

const publicacionController = new PublicacionController();

// Ruta para obtener todas las publicaciones.
router.get('/', publicacionController.obtenerTodasLasPublicaciones);

// Ruta para obtener las publicaciones páginadas.
router.get('/paginadas', publicacionController.obtenerPublicacionesPaginadas);

// Ruta para crear nueva publicacion.
router.post('/', publicacionController.crearPublicacion);

// Ruta para obtener las publicaciones de un autor.
router.get('/autor/:autorId', publicacionController.obtenerPublicacionesDeUnAutor);

// Ruta para obtener las publicaciones recientes.
router.get('/recientes', publicacionController.obtenerPublicacionesMasRecientes);

// Ruta para elimnar las publicaciones de un autor.
router.delete('/autor/:autorId', publicacionController.eliminarPublicacionesDeUnAutor);

module.exports = router;
