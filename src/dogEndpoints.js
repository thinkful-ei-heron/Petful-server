const express = require('express');
//require('dotenv').config();
const dogRouter = express.Router();
const Queue = require('./queue');

// function to fill the dog queue
// function to reset the dog queue if its length is 0
// function to show all dogs?

// when client adopts dog it is dequeued

// need a user queue

// 3 users
// input in the user queue





let dogs = [
    {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retriever listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }
];
// endpoints for getting Dogs
dogRouter
    .route('/')
    .get((req,res,next) => {
        res.status(200);
        res.json(dogs);
    });

dogRouter
    .route('/')
    .delete((req,res,next) => {
        res.status(204).end();
    });

// endpoints for deleting dogs

module.exports = dogRouter;