const express = require('express');

const dogRouter = express.Router();

// Dog example
// {
//   imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
//   imageDescription: 'A smiling golden-brown golden retriever listening to music.',
//   name: 'Zeus',
//   sex: 'Male',
//   age: 3,
//   breed: 'Golden Retriever',
//   story: 'Owner Passed away'
// }

let dogs = [
    {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }
];
// endpoints for getting Dogs
dogRouter
    .route('/dog')
    .get((req,res,next, err) => {
        res.status(200);
        res.json(dogs).end();
    });





// endpoints for deleting dogs