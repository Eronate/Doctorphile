const { GraphQLBoolean, GraphQLNonNull, GraphQLID } = require('graphql')

const deleteAppointmentResolver = require('../../resolvers/AppointmentResolvers/deleteAppointmentResolver')

const deleteAppointment = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteAppointmentResolver,
}

module.exports = deleteAppointment
