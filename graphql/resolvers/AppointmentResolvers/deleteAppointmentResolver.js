const db = require('../../../models')

const deleteAppointmentResolver = async (_, args) => {
  const { id } = args

  const targetAppointment = await db.Appointment.findByPk(id)

  if (!targetAppointment) {
    return null
  }

  try {
    await targetAppointment.destroy()

    return true
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = deleteAppointmentResolver
