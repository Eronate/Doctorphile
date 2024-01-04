const { GraphQLBoolean, GraphQLNonNull, GraphQLID } = require('graphql')

const deleteDoctorResolver = require('../../resolvers/DoctorResolvers/deleteDoctorResolver')

const deleteDoctor = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteDoctorResolver,
}

module.exports = deleteDoctor
