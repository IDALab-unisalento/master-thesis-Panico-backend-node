const {MongoClient} = require('mongodb');

let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoDb = require('./database/db');
 
mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected ')
  },
  error => {
    console.log('Database error: ' + error)
  }
)


const createError = require('http-errors');
const readinessRoute = require('./routes/readiness_routes');
const sleepRoute = require('./routes/sleep_routes');
const activitiesRoute = require('./routes/activities_routes ');
const heartrateRoute = require('./routes/heartrate_routes');
const train30Route = require('./routes/train30_routes');
const train40Route = require('./routes/train40_routes');
const train60Route = require('./routes/train60_routes');
const sleepAnomaliesRoute = require('./routes/sleep_anomalies_routes');
const conconiRoute = require('./routes/conconi_routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
 
// Static directory path
app.use(express.static(path.join(__dirname, 'dist/angular-mean-crud-tutorial')));
 
 
// API readiness
app.use('/readiness', readinessRoute)

// API sleep
app.use('/sleep', sleepRoute)

// API activity
app.use('/activity', activitiesRoute)

// API heartrate
app.use('/heartrate', heartrateRoute)

// API train
app.use('/train30', train30Route)

// API train
app.use('/train40', train40Route)

// API train
app.use('/train60', train60Route)

// API train
app.use('/conconi', conconiRoute)

// API sleep anomalies
app.use('/sleepAnomalies', sleepAnomaliesRoute)

// PORT
const port = process.env.PORT || 8080;
 
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
 
// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});
 
// Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-mean-crud-tutorial/index.html'));
});
 
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
