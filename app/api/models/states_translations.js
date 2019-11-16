const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statesTranslations = new Schema({
alpha2Code: {
  type: String,
  trim: true  
 },
 country: {
  type: String,
  trim: true
 },
 language: {
     type: String,
     trim: true
 }
});
module.exports = mongoose.model('StatesTranslations', statesTranslations);