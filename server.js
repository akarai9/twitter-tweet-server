'use strict';

// get the packages we need
var fs = require('fs'), // use to handle file I/O opreations
  express = require('express'), //use to define framework
  expressValidator = require('express-validator'),
  app = express(), //taking express object for whole project
  bodyParser = require('body-parser'), //it is use to handle post reuqests
  morgan = require('morgan'), //use morgan to for development env
  cors = require('cors'),
  utils = require('./util/customFunctions'), // used custom function
  util = new utils(),
  config = require('./config/config'),
  constants = require('./config/appConstants');
  global.fetch = require('node-fetch');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

var https = require("https");

app.set('superSecret', constants.Secret); // secret variable
// ====================================
// Route need to allow cross origin
// ====================================
const CorsOptions = {
  origin: '*',//config.OriginWhiteList,
  credentials: true
};
app.use(cors(CorsOptions));

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({
  extended: false
}));

//enabling bodyparser to accept json also
app.use(bodyParser.json({
  limit: '50mb',
  type: 'application/json'
}));

//express validator setting
app.use(expressValidator());

// use morgan to log requests to the console
app.use(morgan('dev'));
//set default language
app.use(function (req, res, next) {
  let lang = req.params.language || req.headers['language'];
  if (lang) {
    if (constants.language[lang]) {
      app.set('lang', constants.language[lang]);
    } else {
      app.set('lang', 'en');
    }
  } else {
    app.set('lang', 'en');
  }
  next();
});

//Route Start

//adding route for home page
app.get('/', function (req, res) {
  res.send(
    '<center><h2><b>Hi, This is a Server.<br><i> How can i help you ;)</i></b></h2></center>'
  );
});

//define common api and require routes based file &
//adding middleware for api

const services = require('./routes/routes');
app.use('/api/v1', services);

// catch errors and save as file in log folder
process
  .on('uncaughtException', function (err) {
    var stack = err.stack;
    var timeout = 1;
    console.log('uncaughtException=====>', stack);
  })
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  });

//html views set up
app.use(express.static('public'));

var port = 8001;
app.listen(port, function () {
  console.log('Listening on ' + port);
});


// https.createServer(app).listen(port);

console.log(">>>>>>>>>>>>>" + port);