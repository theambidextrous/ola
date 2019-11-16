const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statesRegionalBlocs = new Schema({
alpha2Code: {
  type: String,
  trim: true  
 },
 acronym: {
  type: String,
  trim: true
 },
 name: {
     type: String,
     trim: true
 }
});
module.exports = mongoose.model('StatesRegionalBlocs', statesRegionalBlocs);