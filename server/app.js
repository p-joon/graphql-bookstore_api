const { graphqlHTTP } = require('express-graphql');
const _ = require('lodash');
const express = require('express');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const constants = require('./constants.js');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to MongoDB cloud db
mongoose.connect(constants.DB_LINK);
mongoose.connection.once('open', () => {
    console.log('connected to database'); 
});

// any request to '/graphql' will be handled by grpahqlHTTP() function
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});