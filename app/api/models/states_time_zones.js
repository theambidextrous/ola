const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statesTimezones = new Schema({
alpha2Code: {
  type: String,
  trim: true  
 },
 timeZone: {
  type: String,
  trim: true
 }
});

module.exports = mongoose.model('StatesTimezones', statesTimezones);