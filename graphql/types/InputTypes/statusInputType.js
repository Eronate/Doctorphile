const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql')

const statusInputType = new GraphQLInputObjectType({
  name: 'StatusInputType',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
})

module.exports = statusInputType
