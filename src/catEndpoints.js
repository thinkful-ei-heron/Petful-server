const express  = require('express');
const catRouter = express.Router();
const Queue = require('./queue');

let cat = new Queue;



catRouter
.route('/')
.get((req,res) => {
    console.log('get for cat');
    res.json(catData);
});


catRouter
    .route('/')
    .delete((req,res,next) => {
        res.status(204).end();
    });

module.exports = catRouter;