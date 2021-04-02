const { GraphQLString } = require('graphql');
const graphql = require('grpahql');

const { GraphQLObjectType, GrpahQLString } = graphql;

// temp test data
var books = [
    {name: 'Name of the Wind', genre:'Fantasy', id:'1'},
    {name: 'The Final Empire', genre:'Fantasy', id:'2'},
    {name: 'The Long Earth', genre:'Sci-Fi', id:'3'},
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    // making fields as a function helps you with references 
    fields: () => ({
        id: { type: GrpahQLString },
        name: { type: GrpahQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    // each items in the fields is a type of root query
    fields: {
        // field names must match with your queries
        book: {
            type: BookType,
            args: { id: { type: GrpahQlString }},
            resolve(parent, args){
                // code to get data from db / other source
                return _.find(books, {id: args.id});
            }
        } 
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});