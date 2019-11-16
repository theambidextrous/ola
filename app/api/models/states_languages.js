const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statesLanguages = new Schema({
alpha2Code: {
  type: String,
  trim: true  
 },
 iso639_1: {
  type: String,
  trim: true
 },
 iso639_2: {
     type: String,
     trim: true
 },
 name: {
     type: String,
     trim: true
 },
 nativeName: {
     type: String,
     trim: true
 }
});
module.exports = mongoose.model('StatesLanguages', statesLanguages);