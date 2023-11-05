const express = require('express');
const router = express.Router();
const PublicacionController = require('../controllers/PublicacionController'); // Import the controller

const publicacionController = new PublicacionController(); // Create an instance of the controller

// Route to obtain all publications
router.get('/', async (req, res) => {
    await publicacionController.obtenerTodasLasPublicaciones(req, res);
});

// Route to create a new publication
router.post('/', async (req, res) => {
    await publicacionController.crearPublicacion(req, res);
});

// Route to obtain publications of a specific author
router.get('/autor/:autorId', async (req, res) => {
    await publicacionController.obtenerPublicacionesDeUnAutor(req, res);
});

// Route to obtain the most recent publications
router.get('/recientes', async (req, res) => {
    await publicacionController.obtenerPublicacionesMasRecientes(req, res);
});

// Route to delete publications of a specific author
router.delete('/autor/:autorId', async (req, res) => {
    await publicacionController.eliminarPublicacionesDeUnAutor(req, res);
});

module.exports = router;
