const express = require('express');
const router = express.Router();
const {     
        obtenerTodosLosAutores,
        obtenerAutorPorId,
        crearAutor,
        actualizarAutor,
        eliminarAutor
    } = require('../controllers/autorController');

// TODO: Para Juan, ver si te sirve para el frontend en EJS, si hay algun problema puedes cambiarlas como gustes

// Obtener todos los autores
router.get('/', obtenerTodosLosAutores);

// Obtener un autor por id
router.get('/autor/:id', obtenerAutorPorId);

// Crear un autor
router.post('/create', crearAutor);

// Actualizar un autor
router.put('/update/:id', actualizarAutor);

// Eliminar un autor
router.delete('/delete/:id', eliminarAutor);

module.exports = router;