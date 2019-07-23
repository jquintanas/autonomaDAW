const express = require('express');
const morgan = require('morgan');
const path = require('path');
//variables del servidor
const app = express();
//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/view'));

//middleware --> se ejecuta antes de las peticiones de usuarios
app.use(morgan('dev'));

//static files
app.use(express.static(path.join(__dirname, '/src/public')));

const server = app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
