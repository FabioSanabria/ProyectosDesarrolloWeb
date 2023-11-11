nst express = require('express');
const router = express.Router();
const ComentarioController = require('../controllers/comentarioController'); // Importar el controlador

const comentarioController = new ComentarioController(); // Crear una instancia del controlador



module.exports = router;