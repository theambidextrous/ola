const mongoose = require('mongoose');
var util = require('util');
console.log(util.inspect(process.env));
var username = process.env.MONGODB_USER || 'openlocationsapi';
var password = process.env.MONGODB_PASSWORD || 'openlocationsapi';
var host = process.env.MONGODB_SERVICE_HOST || '172.30.3.175';
var port = process.env.MONGODB_SERVICE_PORT || 27017;
var database = process.env.MONGODB_DATABASE || 'openlocationsapidb';
var mongoDB = 'mongodb://' + username + ':' + password +'@' + host + ':' + port + '/' + database + '?authSource=admin';
//console.log(mongoDB);
mongoose.connect('mongodb://openlocationsapimongodb:27017/openlocationsapidb', {
    useNewUrlParser: true
}).then(() => {
    console.log('Connected to mongo service...');
}).catch((err) => {
    console.log('Error connecting.... : ', err);
});
// mongoose.connect(mongoDB).then(() => {
// console.log("Connected to Database");
// }).catch((err) => {
//     console.log("Not Connected to Database, ERROR! ", err);
// });
mongoose.Promise = global.Promise;
module.exports = mongoose;



