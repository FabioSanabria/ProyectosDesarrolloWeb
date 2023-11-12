const express = require('express');
const router = express.Router();
const PublicacionController = require('../controllers/publicacionController');

const publicacionController = new PublicacionController();

// Ruta para crear una publicación.
router.get('/', publicacionController.mostrarEliminarPublicacion);
router.post('/', publicacionController.eliminarPublicacion);

module.exports = router;