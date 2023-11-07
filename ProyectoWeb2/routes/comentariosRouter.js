const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentariosController'); // Importar el controlador

const comentarioController = new comentarioController(); // Crear una instancia del controlador

// Route to obtain all comments
router.get('/', async (req, res) => {
    await comentarioController.obtenerComentariosDeUnaPublicacion(req, res);
});

// Route to create a new comment
router.post('/', async (req, res) => {
    await comentarioController.crearComentario(req, res);
});

// Route to obtain comments of a specific publication
router.get('/:publicacionId', async (req, res) => {
    await comentarioController.cantidadComentariosDeUnaPublicacion(req, res);
});

module.exports = router;