const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let heartrate = new Schema({
 
}, {
  collection: 'heartrate'
})
 
module.exports = mongoose.model('heartrate', heartrate)