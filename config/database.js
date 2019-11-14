const mongoose = require('mongoose');
mongoose.connect('mongodb://openlocationsapi:openlocationsapi@openlocationsapimongodb:27017/openlocationsapidb', {
    useNewUrlParser: true
}).then(() => {
    console.log('Connected to mongo service...');
}).catch((err) => {
    console.log('Error connecting.... : ', err);
});
mongoose.Promise = global.Promise;
module.exports = mongoose;



