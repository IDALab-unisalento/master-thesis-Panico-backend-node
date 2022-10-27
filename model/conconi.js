const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let conconi = new Schema({
 
}, {
  collection: 'conconi'
})
 
module.exports = mongoose.model('conconi', conconi)