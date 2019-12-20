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
function createQueues(){
    for(let i=0; i < dogs.length; i++){
        dogQueue.enqueue(dogs[i]);
        catQueue.enqueue(cats[i]);
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
// This will be used to give to the client the current user/ animal
function currAnimal(queue){
   return queue.peek();
}
function main(){
    createQueues();
    currAnimal(dogQueue);
    dogQueue.dequeue();
}
//console.log(main());

module.exports = {createQueues, currAnimal, adoptPet, dogQueue, catQueue, userQueue};