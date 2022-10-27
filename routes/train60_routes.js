const express = require('express');
const app = express();
 
const train60Route = express.Router();
let sleep = require('../model/train60');
 
const {MongoClient} = require('mongodb');
mongoDb = require('../database/db');
const client = new MongoClient(mongoDb.db);


train60Route.get('/getAll', async (req, res) => {

    const result = await client.db("footballDB").collection("training_100m").find({}).toArray(function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(JSON.stringify(result));
        }
    });

    if (result) {
        console.log(result);
    } else {
        console.log(`No listings found with the name`);
    }

})
// Get sleep by id

train60Route.route('/get-train60/:id').get((req, res) => {
    var ObjectID = require('mongodb').ObjectId;

    client.db("footballDB").collection('training_100m').find({_id : new ObjectID(req.params.id)}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
module.exports = train60Route;