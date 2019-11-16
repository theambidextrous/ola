const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statesOtherNames = new Schema({
alpha2Code: {
  type: String,
  trim: true  
 },
 otherNames: {
  type: String,
  trim: true
 }
});

module.exports = mongoose.model('StatesOtherNames', statesOtherNames);