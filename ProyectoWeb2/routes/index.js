var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    autorId = 0;
    nombre = 'Invitado';
    autorTipo = 'Invitado';

    req.session.user_data = { autorId, nombre, autorTipo };

    res.render('index', {
        title: 'Diario Web'
    });
});

module.exports = router;
