const userModel = require('../models/users');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const mailer = require('./emailjs/email');
module.exports = {
 create: function(req, res, next) {
  const key = jwt.sign({id: req.body.email}, req.app.get('secretKey'));
  userModel.create({ fullname: req.body.name, email: req.body.email, phone: req.body.phone, consumer_key: key, password: req.body.password }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "API User added successfully!!!", data: null});
      
    });
 },
sendmail: function(next){
    var server 	= mailer.server.connect({
        user:	"idd.otuya@outlook.com",
        password:"password",
        host:	"smtp-mail.outlook.com",
        tls: {ciphers: "SSLv3"}
    });

    var message	= {
        text:	"i hope this works",
        from:	"you <username@your-email.com>",
        to:		"someone <someone@your-email.com>, another <another@your-email.com>",
        cc:		"else <else@your-email.com>",
        subject:	"testing emailjs",
        attachment:
        [
            {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
            {path:"path/to/file.zip", type:"application/zip", name:"renamed.zip"}
        ]
    };
    server.send(message, function(err, message) { console.log(err || message); });
},
authenticate: function(req, res, next) {
    userModel.findOne({consumer_key: req.body.consumer_key}, function(err, userInfo){
        if (err) {
            next(err);
        } 
        else {
            if(bcrypt.compareSync(req.body.password, userInfo.password)) {
                const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
                res.json({status:"00", message: "authorized", data:{user: userInfo, token:token}});
            }else{
                res.json({status:"error", message: "Invalid email/password!!!", data:null});
            }
        }
    });
 },
}