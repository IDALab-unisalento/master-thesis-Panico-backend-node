const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let sleepAnomaly = new Schema({
 
}, {
  collection: 'sleepAnomaly'
})
 
module.exports = mongoose.model('sleepAnomaly', sleepAnomaly)