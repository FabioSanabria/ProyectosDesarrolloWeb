const express = require('express');
const router = express.Router();
const PublicacionController = require('../controllers/publicacionController');

const publicacionController = new PublicacionController();

// Route for obtaining all publicaciones
router.get('/', publicacionController.obtenerTodasLasPublicaciones);

// Route for creating a new publicacion
router.post('/', publicacionController.crearPublicacion);

// Route for obtaining publicaciones of a specific author
router.get('/autor/:autorId', publicacionController.obtenerPublicacionesDeUnAutor);

// Route for obtaining most recent publicaciones
router.get('/recientes', publicacionController.obtenerPublicacionesMasRecientes);

// Route for deleting publicaciones of a specific author
router.delete('/autor/:autorId', publicacionController.eliminarPublicacionesDeUnAutor);

module.exports = router;
