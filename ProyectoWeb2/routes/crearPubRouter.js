const express = require('express');
const router = express.Router();
const PublicacionController = require('../controllers/publicacionController');

const publicacionController = new PublicacionController();

// Ruta para crear una publicaci�n.
router.get('/', publicacionController.mostrarCrearPublicacion);
router.post('/', publicacionController.crearPublicacion);

module.exports = router;