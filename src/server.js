const express = require('express');
const cors = require('cors');
const dogRouter = require('./dogEndpoints'); 
const catRouter = require('./catEndpoints');
const { CLIENT_ORIGIN, PORT } = require('./config');
const userRouter = require('./userEnpoints');
const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN
}));



app.use('/api/dog', dogRouter);
app.use('/api/cat', catRouter);
app.use('/api/user', userRouter);

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



app.listen(PORT,()=>{
  console.log(`Serving on ${PORT}`);
});