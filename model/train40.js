const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let train40 = new Schema({
 
}, {
  collection: 'train40'
})
 
module.exports = mongoose.model('train40', train40)