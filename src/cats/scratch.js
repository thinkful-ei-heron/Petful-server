// Cat queue
// Dog queue
// User queue
const Queue = require('../queue');
const dogs = require('../dogs/dogData');
const cats = require('./catData');
const users = require('../users/usersData');
// Get request show currCat and curr Dog

    let dogQueue = new Queue();
    let catQueue = new Queue();
    let userQueue = new Queue();

// This will be done when the queue reaches 0
function fillCatQueue(){
    for(let i=0; i < cats.length; i++){
        catQueue.enqueue(cats[i]);
    }
    
}

function fillDogQueue(){
    for(let i=0; i < dogs.length; i++){
        dogQueue.enqueue(dogs[i]);
    }
}
function fillUserQueue(){
    for(let i=0; i < users.length; i++){
        userQueue.enqueue(users[i]);
    }
}

// This will be done on the delete endpoint.
function adoptPet(queue){
    if(!queue.first){
        return alert('There are no pets to adopt?');
    }
   return queue.dequeue();

}

function getAllUsers(queue){
    let list = [];
    for(let i = 0; i < 4;i++){
        let tempValue = queue.dequeue();
        list.push(tempValue);
    }
    //console.log('list after for LOOP',list);
    return list;
}

function removeUser(){
   return userQueue.dequeue();
}


// This will be used to give to the client the current user/ animal
function currAnimal(queue){
   return queue.peek();
}
function main(){
    if(userQueue.first === null) fillUserQueue();
    if(dogQueue.first === null) fillDogQueue();
    if(catQueue.first === null) fillCatQueue();
    //console.log(userQueue);
    //getAllUsers(userQueue);
}
main();

module.exports = {fillCatQueue, fillDogQueue, fillUserQueue, currAnimal, adoptPet, dogQueue, catQueue, userQueue, getAllUsers, removeUser};