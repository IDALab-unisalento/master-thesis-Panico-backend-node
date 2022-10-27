const express = require('express');
const app = express();
 
const sleepAnomaliesRoute = express.Router();
let sleepAnomaly = require('../model/sleepAnomaly');
 
const {MongoClient} = require('mongodb');
mongoDb = require('../database/db');
const client = new MongoClient(mongoDb.db);


sleepAnomaliesRoute.get('/getAll', async (req, res) => {

    const result = await client.db("footballDB").collection("sleep_anomalies").find({}).toArray(function (err, result) {
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
sleepAnomaliesRoute.route('/get-sleep_anomalies/:id').get((req, res) => {
    sleepAnomaly.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
module.exports = sleepAnomaliesRoute;