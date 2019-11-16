const express = require('express'); 
const logger = require('morgan');
const locations = require('./routes/ola') ;
const users = require('./routes/users');
require('dotenv').config();
//NEW ROUTES
const blocs_other_names = require('./routes/blocs_other_names');
const states_borders = require('./routes/states_borders');
const states_calling_codes = require('./routes/states_calling_codes');
const states_currencies = require('./routes/states_currencies');
const states_languages = require('./routes/states_languages');
const states_other_names = require('./routes/states_other_names');
const states_regional_blocs = require('./routes/states_regional_blocs');
const states_time_zones = require('./routes/states_time_zones');
const states_translations = require('./routes/states_translations');
const states = require('./routes/states');
//
const bodyParser = require('body-parser');
const mongoose = require('./config/database');
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var jwt = require('jsonwebtoken');
const app = express();
app.set('secretKey', process.env.JWT_SECRET);
app.set('smtp_user', process.env.SMTP_USER);
app.set('smtp_pass', process.env.SMTP_PASS);
console.log(process.env.SMTP_USER);
//conn
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
//
app.use(logger('dev'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API public route
app.use('/api/v1/users', users);
// API private routes
app.use('/api/v1/ola', validateUser, locations);
//new private routes
app.use('/api/v1/blocksothernames', validateUser, blocs_other_names);
app.use('/api/v1/borders', validateUser, states_borders);
app.use('/api/v1/codes', validateUser, states_calling_codes);
app.use('/api/v1/currencies', validateUser, states_currencies);
app.use('/api/v1/languages', validateUser, states_languages);

app.use('/api/v1/names', validateUser, states_other_names);
app.use('/api/v1/blocs', validateUser, states_regional_blocs);
app.use('/api/v1/timezones', validateUser, states_time_zones);
app.use('/api/v1/translations', validateUser, states_translations);
app.use('/api/v1/states', validateUser, states);
//ico
app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});

//home
app.get('/', function(req, res){
    res.render('index', {
        title:'Open Locations API | OLA by juma',
        page:'Home',
        menuId:'home'
    })
});
//about
app.get('/about', function(req, res){
    res.render('juma', {
        title:'Open Locations API | OLA by juma',
        page:'About',
        menuId:'about'
    })
});
//account
app.get('/sign-up', function(req, res){
    res.render('join', {
        title:'Open Locations API | Sign up',
        page:'Sign up',
        menuId:'join',
        message: ''
    });
});
//privacy
app.get('/policy', function(req, res){
    res.render('policy', {
        title:'Open Locations API | OLA by juma',
        page:'Privacy Policy',
        menuId:'policy'
    });
});
//validate
function validateUser(req, res, next) {
    jwt.verify(req.headers['skylar-token'], req.app.get('secretKey'), function(err, decoded) {
      if (err) {
        res.json({
            status:"01",
            message: "Authentication failed",
            data:null
        });
      }else{
        // add user id to request
        req.body.userId = decoded.id;
        next();
      }
    });
    
}
app.use(function(req, res, next) {
    let err = new Error('Not Found');
        err.status = 404;
        next(err);
});
app.use(function(err, req, res, next) {
    console.log(err);
     if(err.status === 404)
      res.status(404).json({message: "Not found"});
     else 
       res.status(500).json({message: "Internal server error"});
});
app.listen(port, function(){ console.log('OLA server running on port ' + port);});