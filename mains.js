const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

//home
app.get('/', function(req, res){
    res.render('index', {
        title:'Open Locations API | OLA by juma',
        page:'Home',
        menuId:'home'
    })
});
//about
//home
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
app.listen(port, function(){ console.log('OLA server running on port {port}');});