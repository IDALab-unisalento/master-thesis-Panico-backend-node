const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let activities = new Schema({

}, {
  collection: 'activities'
})
 
module.exports = mongoose.model('activities', activities)