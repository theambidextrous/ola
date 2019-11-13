const mongoose = require('mongoose');
var util = require('util');
console.log(util.inspect(process.env));
var username = process.env.MONGODB_USER || 'openlocationsapi';
var password = process.env.MONGODB_PASSWORD || 'openlocationsapi';
var host = process.env.MONGODB_SERVICE_HOST || '127.0.0.1';
var port = process.env.MONGODB_SERVICE_PORT || 27017;
var database = process.env.MONGODB_DATABASE || 'openlocationsapidb';
var mongoDB = 'mongodb://' + username + ':' + password +'@' + host + ':' + port + '/' + database + '?authSource=admin';
var url = 'mongodb://127.0.0.1:27017/openlocationsapidb?authSource=admin';
console.log(mongoDB);
console.log(url);

mongoose.connect(mongoDB).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database, ERROR! ", err);
});
// mongoose.connect(url, {
//     useNewUrlParser: true,
//     //useUnifiedTopology: true
// });
mongoose.Promise = global.Promise;
module.exports = mongoose;



