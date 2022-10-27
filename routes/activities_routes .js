const express = require('express');
const app = express();
 
const activitiesRoute = express.Router();
let activities = require('../model/activities');
 
const {MongoClient} = require('mongodb');
mongoDb = require('../database/db');
const client = new MongoClient(mongoDb.db);


activitiesRoute.get('/getAll', async (req, res) => {
    const result = await client.db("footballDB").collection("activities").find({}).toArray(function (err, result) {
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
// Get activity by id
activitiesRoute.route('/get-activity/:id').get((req, res) => {
  activities.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
module.exports = activitiesRoute;