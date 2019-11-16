const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statesBorders = new Schema({
alpha2Code: {
  type: String,
  trim: true
 },
 border: {
  type: String,
  trim: true
 }
});
module.exports = mongoose.model('StatesBorders', statesBorders);