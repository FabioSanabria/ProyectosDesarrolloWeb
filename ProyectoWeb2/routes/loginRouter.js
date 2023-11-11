const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autorController'); // Importar el controlador

const AutorController = new autorController(); // Crear una instancia del controlador

router.get('/login', AutorController.autenticarAutor);

module.exports = router;