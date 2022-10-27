const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let train30 = new Schema({
 
}, {
  collection: 'train30'
})
 
module.exports = mongoose.model('train30', train30)