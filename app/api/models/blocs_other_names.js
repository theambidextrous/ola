const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blocsOtherNames = new Schema({
 bloc: {
  type: String,
  trim: true
 },
 otherName: {
     type: String,
     trim: true
 }
});
module.exports = mongoose.model('BlocsOtherNames', blocsOtherNames);