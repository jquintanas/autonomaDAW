const passport = require('passport');
//const hash = require('hash.js');
const LocalStrategy = require('passport-local').Strategy;

//const pool = require('./database');
//const helpers = require('./helpers');

passport.use('local.signin', new LocalStrategy({
  usernameField: 'cedula',
  passwordField: 'pass',
  passReqToCallback: true
}, (req,cedula,pass,done) => {
  if(cedula == "0123456789" &&  pass == "000360"){
    console.log("todo ok");
    done(null, "0123456789",req.flash('success',  "0123456789"));
  }
  else {
    console.log("fallo algo");
    done(null, false, req.flash('message', 'Contraseña erronea.'));
  }
}
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  console.log(id);
  //const rows = await pool.query('SELECT * FROM cooperativa WHERE ruc = ?', [id]);
  done(null, "0123456789");
});
