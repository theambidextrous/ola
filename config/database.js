const mongoose = require('mongoose');
var util = require('util');
console.log(util.inspect(process.env));
var username = process.env.MONGODB_USER || 'openlocationsapi';
var password = process.env.MONGODB_PASSWORD || 'openlocationsapi';
var host = process.env.MONGODB_SERVICE_HOST || '127.0.0.1';
var port = process.env.MONGODB_SERVICE_PORT || 27017;
var database = process.env.MONGODB_DATABASE || 'openlocationsapidb';
var mongoDB = 'mongodb://' + username + ':' + password +'@' + host + ':' + port + '/' + database;
console.log(mongoDB);
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    //useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
module.exports = mongoose;



