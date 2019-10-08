// Imports
const express = require('express');

// Need our Router 
const accountRouter = require('./Routers/accountsRouter.js');

// *** I am using my dbConfig file in my accounts Router file
// const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

// ORDER MATTERS
    // add our accountRouter to be used by the server
server.use('/api/accounts', accountRouter)

// Always Export the server.
module.exports = server;