const { 
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');

const deleteClinicResolver = require('../resolvers/deleteClinicResolver');

const deleteClinic = {
    type: GraphQLBoolean,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      }
    },
    resolve: deleteClinicResolver,
}

module.exports = deleteClinic;
