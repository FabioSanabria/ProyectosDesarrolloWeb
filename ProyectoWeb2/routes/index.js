var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
   req.session.autorId = 0;
   req.session.nombre = 'Invitado'
   req.session.autorTipo = 'Invitado';

   autorId = req.session.autorId;
   nombre = req.session.nombre;
   autorTipo = req.session.autorTipo;
    res.render('index',
        { title: 'Diario Web' }, { autorId }, { nombre }, {autorTipo});
});

module.exports = router;
