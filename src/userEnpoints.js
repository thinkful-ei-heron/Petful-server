const express = require('express');
//require('dotenv').config();
const userRouter = express.Router();
const Queue = require('./queue');
const services = require('./cats/scratch');

let userQueue = services.userQueue;
userRouter
    .route('/')
    .get((req,res,next) => {
        let currUsr = services.currAnimal(userQueue);
        if(!currUsr){
            services.createQueues();
            currUsr = services.currAnimal(userQueue);
        }
        res.status(200);
        res.json(currUsr);
    });
userRouter
    .route('/')
    .delete((req,res,next) => {
        userQueue.dequeue();
        res.status(200).send({message: 'Successful Adoption'});
    });
    module.exports = userRouter;