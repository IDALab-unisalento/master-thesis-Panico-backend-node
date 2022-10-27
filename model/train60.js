const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let train60 = new Schema({
 
}, {
  collection: 'train60'
})
 
module.exports = mongoose.model('train60', train60)