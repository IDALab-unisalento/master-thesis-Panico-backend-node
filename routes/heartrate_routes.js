const express = require('express');
const app = express();
 
const heartrateRoute = express.Router();
let heartrate = require('../model/heartrate');
 
const {MongoClient} = require('mongodb');
mongoDb = require('../database/db');
const client = new MongoClient(mongoDb.db);


heartrateRoute.get('/getAll', async (req, res) => {

    const result = await client.db("footballDB").collection("heartrate").find({}).toArray(function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(JSON.stringify(result));
        }
    });

    if (result) {
        console.log(result);
    } else {
    }

})
// Get heartrate by id
heartrateRoute.route('/get-heartrate/:id').get((req, res) => {
    heartrate.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
module.exports = heartrateRoute;