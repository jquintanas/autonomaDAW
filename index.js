const express = require('express');
const morgan = require('morgan');
const path = require('path');
const flash = require('connect-flash');
const passport = require('passport');
const bodyparser = require('body-parser');
const session = require('express-session');
require('./src/config/passport');
//variables del servidor
const app = express();

//imports de rutas
const pagina1 = require("./src/routes/pagina1Routes");
const pagina2 = require("./src/routes/pagina2Routes");
const login = require("./src/routes/loginRoutes");
//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/view'));

//middleware --> se ejecuta antes de las peticiones de usuarios
app.use(session({
  secret: 'sis_tb_flotillas',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}));
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//static files
app.use(express.static(path.join(__dirname, '/src/public')));

//rutas del servidor
app.use("/",pagina1);
app.use("/p2",pagina2);
app.use("/login",login);

const server = app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
