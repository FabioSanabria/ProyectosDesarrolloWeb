const express = require('express');
const router = express.Router();
const PublicacionController = require('../controllers/publicacionController');

const publicacionController = new PublicacionController();

// Ruta para obtener todos la publicaci�n.
router.get('/:id', publicacionController.obtenerPublicacionesDeUnAutor);

module.exports = router;
