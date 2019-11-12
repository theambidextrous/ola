const mongoose = require('mongoose');
//staging
// const mongoDB = 'mongodb://localhost/ola';
//production - openshift server
const mongoDB = process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME;
// if (process.env.OPENSHIFT_MONGODB_DB_URL) {
//     mongoDB = process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME;
// }
console.log(mongoDB);

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
module.exports = mongoose;