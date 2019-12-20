const express  = require('express');
const catRouter = express.Router();
const catService = require('./cats-service');

catRouter
.route('/')
.get((req,res,next) => {
    catService.getAllCats()
        .then( cats => {
            res.json(cats)
        })
        .catch(next)
});
