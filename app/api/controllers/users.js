const userModel = require('../models/users');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
var appRoot = require('app-root-path');
const mailer = require(appRoot + '/node_modules/emailjs/email.js');
module.exports = {
 create: function(req, res, next) {
  const key = jwt.sign({id: req.body.email}, req.app.get('secretKey'));
  console.log("name = " + req.body.name);
  userModel.create({ fullname: req.body.name, email: req.body.email, phone: req.body.phone, consumer_key: key, password: req.body.password }, function (err, result) {
      if (err) 
       next(err);
      else
        console.log(process.env.SMTP_USER);
        console.log(process.env.SMTP_PASS);
        var server 	= mailer.server.connect({
            user:	process.env.SMTP_USER,
            password: process.env.SMTP_PASS,
            host:	"mail.howto-daily.com",
            ssl: false,
            port: 587
        });
        var message	= {
            text:	"Consumer Key: " + key,
            from:	"I.O. Juma <idd.otuya@outlook.com>",
            to:		req.body.name + " <" + req.body.email + ">",
            subject:	"Open Locations API by juma | Consumer Key",
        };
        server.send(message, function(err, message) { 
            if(err)
                console.log(err); 
            else
                res.json({status: "00", message: "API User added successfully! Check your phone for Consume key", data: null});
        });
      
    });
 },
authenticate: function(req, res, next) {
    userModel.findOne({consumer_key: req.body.consumer_key}, function(err, userInfo){
        if (err) {
            console.log(err);
            res.json({status:"01", message: "Authentication failed", data:null});
            return;
        } 
        else {
            if(userInfo){
                if(bcrypt.compareSync(req.body.secret, userInfo.password)) {
                    const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
                    res.json({status:"00", message: "authorized", data:{user: delete userInfo['password'], token:token}});
                }else{
                    res.json({status:"01", message: "Authentication failed", data:null});
                }
            }else{
                res.json({status:"01", message: "Authentication failed", data:null});
                return;
            }
        }
    });
 },
}