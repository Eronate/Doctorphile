const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLID,
} = require('graphql');

const StatusType = new GraphQLObjectType({
    name: 'Status',
    fields: () => ({
      id: {
        type: GraphQLID,
      },
      title: {
        type: GraphQLString,
      },
    })
});

module.exports = StatusType;