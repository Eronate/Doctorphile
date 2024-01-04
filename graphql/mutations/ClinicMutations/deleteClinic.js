const { GraphQLBoolean, GraphQLNonNull, GraphQLID } = require('graphql')

const deleteClinicResolver = require('../../resolvers/ClinicResolvers/deleteClinicResolver')

const deleteClinic = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteClinicResolver,
}

module.exports = deleteClinic
