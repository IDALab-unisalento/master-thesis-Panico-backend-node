const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let readiness = new Schema({
}, {
  collection: 'readiness'
})
 
module.exports = mongoose.model('readiness', readiness)