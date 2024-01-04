const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLID,
} = require('graphql');

const SpecializationType = new GraphQLObjectType({
    name: 'Specialization',
    fields: () => ({
      id: {
        type: GraphQLID,
      },
      name: {
        type: GraphQLString,
      },
    })
});

module.exports = SpecializationType;