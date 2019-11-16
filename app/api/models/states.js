const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const states = new Schema({
name: {
  type: String,
  trim: true  
 },
domain: {
  type: String,
  trim: true
 },
 alpha2Code: {
    type: String,
    trim: true
 },
 alpha3Code: {
    type: String,
    trim: true
 },
 capital: {
  type: String,
  trim: true
 },
 region: {
    type: String,
    trim: true
 },
 subregion: {
    type: String,
    trim: true
 },
 population: {
    type: String,
    trim: true
 },
 lat: {
    type: String,
    trim: true
 },
 long: {
    type: String,
    trim: true
 },
 demonym: {
    type: String,
    trim: true
 },
 area: {
    type: String,
    trim: true
 },
 gini: {
    type: String,
    trim: true
 },
 nativeName: {
    type: String,
    trim: true
 },
 numericCode: {
    type: String,
    trim: true
 },
 flag: {
    type: String,
    trim: true
 },
 cioc: {
    type: String,
    trim: true
 }
});

module.exports = mongoose.model('States', states);