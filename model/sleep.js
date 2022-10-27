const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let sleep = new Schema({
 
}, {
  collection: 'sleep'
})
 
module.exports = mongoose.model('sleep', sleep)