const express = require('express');
const app = express();
 
const readinessRoute = express.Router();
let readiness = require('../model/readiness');
 
const {MongoClient} = require('mongodb');
mongoDb = require('../database/db');
const client = new MongoClient(mongoDb.db);


readinessRoute.get('/getAll', async (req, res) => {

    const result = await client.db("footballDB").collection("readiness").find({}).toArray(function (err, result) {
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
// Get readiness
readinessRoute.route('/get-readiness/:id').get((req, res) => {
    readiness.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
module.exports = readinessRoute;