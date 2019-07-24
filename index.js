const express = require('express');
const morgan = require('morgan');
const path = require('path');
const flash = require('connect-flash');
const passport = require('passport');
const bodyparser = require('body-parser');
const session = require('express-session');
const Sequelize = require('sequelize')
require('./src/config/passport');
//variables del servidor
const app = express();

//imports de rutas
const pagina1 = require("./src/routes/pagina1Routes");
const pagina2 = require("./src/routes/pagina2Routes");
const login = require("./src/routes/loginRoutes");
const nf404 = require("./src/routes/404Router");
const admin = require("./src/routes/adminRouter");
//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/view'));

//conexion bd
const sequelize = new Sequelize('trabajoautonomo2', 'autonomo', 'autonomo', {
  host: 'localhost',
  dialect: 'mysql',
})
sequelize.authenticate()
  .then(async () => {
    await console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

  const Personas = sequelize.define('persona',{
  nombre: Sequelize.STRING(50),
  apellidos: Sequelize.STRING(50),
  edad: Sequelize.INTEGER,
  fecha_nacimiento: Sequelize.DATEONLY
});

async function selectTotal() {
  let personas = await Personas.findAll().then((datos) => {console.log(datos)});
}

//middleware --> se ejecuta antes de las peticiones de usuarios
var sess = {
  secret: 'keyboard cat',
  cookie: {}
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))
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
app.use("/admin",admin);
app.use("/**",nf404);

const server = app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
  selectTotal();
});
