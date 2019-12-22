require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dogRouter = require('./dogEndpoints'); 
const catRouter = require('./catEndpoints');
const { CLIENT_ORIGIN, PORT } = require('./config');
const userRouter = require('./userEnpoints');
const successRouter = require('./successEndpoints');

const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN
}));

const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common';
app.use(morgan(morganSetting));


app.use('/api/dog', dogRouter);
app.use('/api/cat', catRouter);
app.use('/api/user', userRouter);
app.use('/api/success', successRouter);

app.get('/', (req,res, next) => { res.status(200).end(); });

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});


module.exports  = app;