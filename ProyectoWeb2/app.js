const expressSession = require('express-session');
// Si el programa no compila o da algun tipo de error al usar passport, instalar las siguientes dependencias:
// npm install passport
// npm install passport-facebook
// npm install express-session
// Si al instalar todo lo anterior todavia da error entonces documente el codigo de passport y passport-facebook
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pubFeedRouter = require('./routes/pubFeedRouter');
var pubAutorRouter = require('./routes/pubAutorRouter');
var pubCategoriaRouter = require('./routes/pubCategoriaRouter');
var pubCompletaRouter = require('./routes/pubCompletaRouter');
var comentariosRouter = require('./routes/comentariosRouter');
var adminRouter = require('./routes/adminRouter');
var loginRouter = require('./routes/loginRouter');
var crearPubRouter = require('./routes/crearPubRouter');

var app = express();

app.use(expressSession({
    secret: 'my-secret-key-c07194',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000
    }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/publicaciones', pubFeedRouter);
app.use('/autor', pubAutorRouter);
app.use('/categoria', pubCategoriaRouter);
app.use('/publicacion_completa', pubCompletaRouter);
app.use('/comentarios', comentariosRouter)
app.use('/administracion', adminRouter)
app.use('/login', loginRouter);
app.use('/crearPub', crearPubRouter);

app.get('/crpublicacion', (req, res) => {
    res.render('crearPublicacion'); // Asegúrate de que el nombre coincida con tu vista EJS
});

app.get('/logging', (req, res) => {
    res.render('login'); // Asegúrate de que el nombre coincida con tu vista EJS
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
