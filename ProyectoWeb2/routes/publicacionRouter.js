const express = require('express');
const router = express.Router();
const {
        obtenerTodasLasPublicaciones,
        crearPublicacion,
        obtenerPublicacionesDeUnAutor,
        obtenerPublicacionesMasRecientes,
        eliminarPublicacionesDeUnAutor
    } = require('../controllers/publicacionController');

// TODO: Para Juan, ver si te sirve para el frontend en EJS, si hay algun problema puedes cambiarlas como gustes

// Obtener todas las publicaciones
router.get('/', obtenerTodasLasPublicaciones);

// Crear una publicacion
router.post('/create', crearPublicacion);

// Obtener publicaciones de un autor
router.get('/autor/:autorId', obtenerPublicacionesDeUnAutor);

// Obtener publicaciones mas recientes
router.get('/recientes', obtenerPublicacionesMasRecientes);

// Eliminar publicaciones de un autor
router.delete('/delete/:autorId', eliminarPublicacionesDeUnAutor);

module.exports = router;