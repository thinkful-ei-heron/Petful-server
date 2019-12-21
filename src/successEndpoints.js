const express = require('express');
const adopted = require('../src/success/adoptedList');
const successRouter = express.Router();

successRouter
.route('/')
.get((req,res,next) => {
    res.status(200);
    res.json(adopted);
});

module.exports = successRouter;