const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statesCurrencies = new Schema({
alpha2Code: {
  type: String,
  trim: true
 },
 code: {
  type: String,
  trim: true
 },
 name: {
     type: String,
     trim: true
 },
 symbol: {
     type: String,
     trim: true
 }
});
module.exports = mongoose.model('StatesCurrencies', statesCurrencies);