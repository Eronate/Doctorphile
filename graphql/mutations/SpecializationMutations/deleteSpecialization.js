const { GraphQLBoolean, GraphQLNonNull, GraphQLID } = require('graphql')

const deleteSpecializationResolver = require('../../resolvers/SpecializationResolvers/deleteSpecializationResolver')

const deleteSpecialization = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteSpecializationResolver,
}

module.exports = deleteSpecialization
