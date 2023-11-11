const express = require('express');
const router = express.Router();
const FeedController = require('../controllers/feedController');
const PublicacionController = require('../controllers/publicacionController');

const feedController = new FeedController();
const publicacionController = new PublicacionController();


// Ruta para obtener todas las publicaciones.
router.get('/', feedController.obtenerFeed);

// Ruta para obtener las publicaciones páginadas.
router.get('/paginadas', publicacionController.obtenerPublicacionesPaginadas);

module.exports = router;
