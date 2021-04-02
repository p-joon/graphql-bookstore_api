const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();

// any request to '/graphql' will be handled by grpahqlHTTP() function
app.use('/graphql', graphqlHTTP({

}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});