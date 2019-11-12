const mongoose = require('mongoose');
var util = require('util');
//staging
const mongoDB = 'mongodb://127.0.0.1/ola';
console.log(mongoDB);
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
module.exports = mongoose;