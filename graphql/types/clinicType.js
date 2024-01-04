const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLID,
} = require('graphql');

const ClinicType = new GraphQLObjectType({
    name: 'Clinic',
    fields: () => ({
      id: {
        type: GraphQLID,
      },
      name: {
        type: GraphQLString,
      },
      address: {
        type: GraphQLString,
      },
    })
});

module.exports = ClinicType;