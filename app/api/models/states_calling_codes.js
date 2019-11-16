const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statesCallingCodes = new Schema({
alpha2Code: {
  type: String,
  trim: true
 },
callingCode: {
  type: String,
  trim: true
 }
});

module.exports = mongoose.model('StatesCallingCodes', statesCallingCodes);