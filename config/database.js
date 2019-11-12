const mongoose = require('mongoose');
// var util = require('util');
// //staging
// const mongoDB = 'mongodb://127.0.0.1/olapi';
// console.log(mongoDB);
var username = process.env.MONGO_DB_USERNAME;
var password = process.env.MONGO_DB_PASSWORD;
var host = process.env.MONGODB_SERVICE_HOST;
var port = process.env.MONGODB_SERVICE_PORT;
var database = process.env.MONGO_DB_DATABASE;
var mongoDB = 'mongodb://' + username + ':' + password +'@' + host + ':' + port + '/' + database;
console.log(mongoDB);
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    //useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
module.exports = mongoose;