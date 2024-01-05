const { GraphQLNonNull, GraphQLID } = require('graphql')

const AppointmentType = require('../../types/appointmentType')
const appointmentInputType = require('../../types/InputTypes/appointmentInputType')
const updateAppointmentResolver = require('../../resolvers/AppointmentResolvers/updateAppointmentResolver')

const updateAppointment = {
  type: AppointmentType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    appointment: {
      type: appointmentInputType,
    },
  },
  resolve: updateAppointmentResolver,
}

module.exports = updateAppointment
