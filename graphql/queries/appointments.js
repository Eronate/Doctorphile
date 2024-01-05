const { GraphQLList } = require('graphql')

const db = require('../../models')

const AppointmentType = require('../types/appointmentType')

const AppointmentsQuery = {
  type: new GraphQLList(AppointmentType),
  resolve: (_, args) => {
    return db.Appointments.findAll()
  },
}

module.exports = AppointmentsQuery
