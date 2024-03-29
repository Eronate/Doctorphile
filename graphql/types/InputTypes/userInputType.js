const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql')

const userInputType = new GraphQLInputObjectType({
  name: 'UserInputType',
  fields: {
    first_name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    address: {
      type: GraphQLString,
    },
    gender: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
})

module.exports = userInputType
