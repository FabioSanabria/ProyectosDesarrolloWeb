const express = require('express');
const router = express.Router();
const ComentarioController = require('../controllers/comentarioController'); // Importar el controlador

const comentarioController = new ComentarioController(); // Crear una instancia del controlador

router.get('/:publicacionId', comentarioController.obtenerComentariosDeUnaPublicacion);

router.post('/', comentarioController.crearComentario);

router.get('/:publicacionId', comentarioController.cantidadComentariosDeUnaPublicacion);

module.exports = router;