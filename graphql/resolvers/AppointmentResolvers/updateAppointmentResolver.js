const db = require('../../../models')

const updateAppointmentResolver = async (_, args) => {
  const { id, appointment } = args

  const targetAppointment = await db.Appointment.findByPk(id)

  if (!targetAppointment) {
    return null
  }

  const updatedAppointment = await targetAppointment.update({
    ...appointment,
  })

  return updatedAppointment
}

module.exports = updateAppointmentResolver