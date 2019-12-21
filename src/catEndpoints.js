const express  = require('express');
const catRouter = express.Router();
const Queue = require('./queue');
const services = require('./cats/scratch');

let catQueue = services.catQueue;

catRouter
.route('/')
.get((req,res) => {
    let currCat = services.currAnimal(catQueue);
    if(!currCat){
        services.fillCatQueue();
        currCat = services.currAnimal(catQueue);
    }
    catQueue.dequeue();
    res.status(200).json(currCat);
});

catRouter
    .route('/')
    .delete((req,res,next) => {
        catQueue.dequeue();
        res.status(200).send({message: 'Successful Adoption'});
    });

module.exports = catRouter;