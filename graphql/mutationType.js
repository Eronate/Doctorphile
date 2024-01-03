const { 
    GraphQLObjectType, 
} = require('graphql');
const createUser = require('./mutations/createUser');


const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: createUser,
    }
})

module.exports = mutationType;