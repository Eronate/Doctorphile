const { GraphQLBoolean, GraphQLNonNull, GraphQLID } = require('graphql')

const deletePatientResolver = require('../../resolvers/PatientResolvers/deletePatientResolver')

const deletePatient = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deletePatientResolver,
}

module.exports = deletePatient
