const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    first_name: {
      type: GraphQLString,
    },
    last_name: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
    gender: {
      type: GraphQLString,
    },
  }),
})

module.exports = UserType;
