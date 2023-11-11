const express = require('express');
const router = express.Router();
const AutorController = require('../controllers/AutorController'); // Importar el controlador

const autorController = new AutorController(); // Crear una instancia del controlador

router.get('/', autorController.ingresarAutor);
router.post('/', autorController.autenticarAutor);

module.exports = router;