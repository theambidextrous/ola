const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const salt_r = 12;
const Schema = mongoose.Schema;
const UserSchema = new Schema({
 fullname: {
  type: String,
  trim: true,  
  required: true,
 },
 email: {
  type: String,
  trim: true,
  required: true
 },
 phone: {
    type: String,
    trim: true,
    required: true
 },
 consumer_key: {
    type: String,
    trim: true,
    required: true
 },
 password: {
  type: String,
  trim: true,
  required: true
 }
});

UserSchema.pre('save', function(next){
this.password = bcrypt.hashSync(this.password, salt_r);
next();
});

module.exports = mongoose.model('User', UserSchema);