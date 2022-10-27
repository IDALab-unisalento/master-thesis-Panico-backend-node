const express = require('express');
const app = express();
 
const train40Route = express.Router();
let sleep = require('../model/train40');
 
const {MongoClient} = require('mongodb');
mongoDb = require('../database/db');
const client = new MongoClient(mongoDb.db);


train40Route.get('/getAll', async (req, res) => {

    const result = await client.db("footballDB").collection("training_70m_40s").find({}).toArray(function (err, result) {
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

train40Route.route('/get-train40/:id').get((req, res) => {
    var ObjectID = require('mongodb').ObjectId;

    client.db("footballDB").collection('training_70m_40s').find({_id : new ObjectID(req.params.id)}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
module.exports = train40Route;