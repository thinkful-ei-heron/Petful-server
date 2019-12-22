## Project Name: FIFO Adoption Agency

It is a collaboration between Glaiza Wagner and Wesley Jacobs.

- Live app : [Petful-Client](https://petful-client-glaiza-wesley.now.sh)
- Heroku   : [Petful-Server](https://petful-server-glaiza-wesley.herokuapp.com/)
- Github   : [Repo-Link](https://github.com/thinkful-ei-heron/Petful-server)

## API Endpoints
The following are the request endpoints for this server:::

Base URL = `https://petful-server-glaiza-wesley.herokuapp.com/api`

- Cat Endpoints\

    GET /cat => It will display the first cat in queue to be adopted.

    DELETE /cat => When the cat is adopted, it will be automatically removed from the queue.

- Dog Endpoints\

    GET /dog => It will display the first dog in queue to be adopted. 

    DELETE /dog => When the dog is adopted, it will be automatically removed from the queue.

- User Endpoints\

    GET /user <br\>   
        /user/all => It will display all the user that's in the queue.
    
    DELETE /user => When they are done adopting, they will be removed from the queue.


- Success Endpoints

    GET /success => It will show all lists of the animals that has been adopted.

## Technologies
- Node
- Express
- Mocha
- Chai
- Supertest

Client - Deployed in Zeit\
Server - Deployed in Heroku

Copyright G©W 2019