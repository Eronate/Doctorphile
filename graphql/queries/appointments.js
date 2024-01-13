const { GraphQLList } = require('graphql')

const db = require('../../models')

const AppointmentType = require('../types/appointmentType')

const AppointmentsQuery = {
  type: new GraphQLList(AppointmentType),
  resolve: async (_, args) => {
    try {
      const appointments = await db.Appointment.findAll({
        include: [
          { model: db.Doctor },
          { model: db.Patient },
          { model: db.Status },
        ],
      });
      return appointments;
    } catch (error) {
      console.error('Error fetching appointments:', error);
      throw new Error('Failed to fetch appointments');
    }
  },
};


module.exports = AppointmentsQuery
