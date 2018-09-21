var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
const cookieSession = require('cookie-session');

const keys = require('./config/keys');

//prueba
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

//mongoose.connect('mongodb://mongo-server/yourWay3'); // servidor en produccion
mongoose.connect('mongodb://localhost/yourWay3'); //local
var db = mongoose.connection;

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log('connected to mongodb');
});

var routes = require('./routes/index');
var users = require('./routes/users');

// Init App
var app = express();


// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]

}));



// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

var sess = {
  secret: 'CHANGE THIS SECRET',
  cookie: {},
  resave: false,
  saveUninitialized: true
};
app.use(session(sess));
if (app.get('env') === 'production') {
  sess.cookie.secure = true; // serve secure cookies, requires https
}




// Passport init
app.use(passport.initialize());
app.use(passport.session());


app.use('/auth', authRoutes);
// Express Session


// Express Validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;
  
      while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param : formParam,
        msg   : msg,
        value : value
      };
    }
  }));

  // Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
  });
  

app.use('/users', users);
app.use('/', routes);

//create home route
app.get('/', (req, res) => {
  //res.render('home', { user: req.user });
  res.render('index', {user: req.user});
});


// Set Port
app.listen(3000, () => {
  console.log('app now listening for requests on port 3000');
});
