const express = require('express');
const router = express.Router();
const AutorController = require('../controllers/AutorController'); // Importar el controlador

const autorController = new AutorController(); // Crear una instancia del controlador

// Route to obtain all authors
router.get('/', async (req, res) => {
    await autorController.obtenerTodosLosAutores(req, res);
});

// Route to create a new author
router.post('/', async (req, res) => {
    await autorController.crearAutor(req, res);
});

// Route to obtain an author by id
router.get('/:id', async (req, res) => {
    await autorController.obtenerAutorPorId(req, res);
});

// Route to update an author
router.put('/:id', async (req, res) => {
    await autorController.actualizarAutor(req, res);
});

// Route to delete an author
router.delete('/:id', async (req, res) => {
    await autorController.eliminarAutor(req, res);
});

module.exports = router;