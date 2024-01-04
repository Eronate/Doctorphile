const { 
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');

const deleteStatusResolver = require('../resolvers/deleteStatusResolver');

const deleteStatus = {
    type: GraphQLBoolean,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      }
    },
    resolve: deleteStatusResolver,
}

module.exports = deleteStatus;
