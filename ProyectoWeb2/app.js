const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
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


var app = express();
const FACEBOOK_CLIENT_ID = '993143955092483';
const FACEBOOK_CLIENT_SECRET = 'd780e7ef4e58ecaf8e014e7073870fae';

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: "/facebook",
    profileFields: ['emails', 'displayName', 'name', 'picture']
  },
  function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

app.use(expressSession({
    secret: 'jayantpatilapp',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/login/facebook', passport.authenticate('facebook', { scope:['email']}));
app.get('/facebook', passport.authenticate('facebook'),(req, res) => {
  res.redirect('/');
});

app.get('',(req, res) => {
  res.send(req.user? req.user: 'Not logged in, login with facebook');
})

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})

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
