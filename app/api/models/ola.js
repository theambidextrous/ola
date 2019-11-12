const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OlaSchema = new Schema({
locationid: {
  type: String,
  trim: true,  
  required: true,
 },
location: {
  type: String,
  trim: true,
  required: true
 },
 category: {
    type: String,
    trim: true,
    required: true
 },
 region: {
    type: String,
    trim: true,
    required: true
 },
 countrycode: {
  type: String,
  trim: true,
  required: true
 },
 lat: {
    type: String,
    trim: true,
    required: true
 },
 long: {
    type: String,
    trim: true,
    required: true
 },
 elevfeet: {
    type: String,
    trim: true,
    required: true
 },
 popest: {
    type: String,
    trim: true,
    required: true
 },
 country: {
    type: String,
    trim: true,
    required: true
 }
});

module.exports = mongoose.model('Ola', OlaSchema);