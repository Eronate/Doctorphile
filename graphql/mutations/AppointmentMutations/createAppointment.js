const db = require('../../db')

const { GraphQLString, GraphQLNonNull } = require('graphql')

const AppointmentType = require('../../types/appointmentType')
const AppointmentInputType = require('../../types/InputTypes/appointmentInputType')
const createAppointmentResolver = require('../../resolvers/AppointmentResolvers/createAppointmentResolver')

const createAppointment = {
  type: AppointmentType,
  args: {
    appointment: {
      type: AppointmentInputType,
    },
  },
  resolve: createAppointmentResolver,
}

module.exports = createAppointment
