const express = require('express');
const app = express();
 
const sleepRoute = express.Router();
let sleep = require('../model/sleep');
 
const {MongoClient} = require('mongodb');
mongoDb = require('../database/db');
const client = new MongoClient(mongoDb.db);


sleepRoute.get('/getAll', async (req, res) => {

    const result = await client.db("footballDB").collection("sleep").find({}).toArray(function (err, result) {
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
sleepRoute.route('/get-sleep/:id').get((req, res) => {
    sleep.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
module.exports = sleepRoute;