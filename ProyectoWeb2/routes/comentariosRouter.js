const express = require('express');
const router = express.Router();
const {
    obtenerComentariosDeUnaPublicacion,
    crearComentario
    } = require('../controllers/comentarioController');

// TODO: Para Juan, ver si te sirve para el frontend en EJS, si hay algun problema puedes cambiarlas como gustes

// Obtener todos los comentarios de una publicacion
router.get('/:publicacionId', obtenerComentariosDeUnaPublicacion);

// Crear un comentario
router.post('/create', crearComentario);

module.exports = router;
