const express = require('express');
const router = express.Router();
const PublicacionController = require('../controllers/publicacionController');

const publicacionController = new PublicacionController();

// Ruta para crear una publicaci�n.
router.post('/crearPub', publicacionController.crearPublicacion);

module.exports = router;