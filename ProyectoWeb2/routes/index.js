var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    req.session.autorId = 0;
    req.session.nombre = 'Invitado';
    req.session.autorTipo = 'Invitado';

    var autorId = req.session.autorId;
    var nombre = req.session.nombre;
    var autorTipo = req.session.autorTipo;

    res.render('index', {
        title: 'Diario Web',
        autorId: autorId,
        nombre: nombre,
        autorTipo: autorTipo
    });
});

module.exports = router;
