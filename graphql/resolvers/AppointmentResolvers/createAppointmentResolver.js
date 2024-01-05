const db = require('../../../models')

const createAppointmentResolver = async (_, { appointment }) => {
  const { doctor_id, patient_id, status_id, date, notes } = appointment
  console.log(appointment)
  const newAppointment = await db.Clinic.create({
    doctor_id,
    patient_id,
    status_id,
    date,
    notes,
  })

  return newAppointment
}

module.exports = createAppointmentResolver
