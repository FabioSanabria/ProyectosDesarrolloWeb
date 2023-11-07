const express = require('express');
const router = express.Router();
const PublicacionController = require('../controllers/publicacionController');

const publicacionController = new PublicacionController();

// Ruta para obtener todos la publicación.
router.get('/:Categoria', publicacionController.obtenerPublicacionesDeUnaCategirua);

module.exports = router;
