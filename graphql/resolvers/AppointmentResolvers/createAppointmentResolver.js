// resolvers/createAppointmentResolver.js
const db = require('../../../models');
const createAppointmentResolver = async (_, { appointment }) => {
  const { doctor_id, patient_id, status_id, date, notes } = appointment;

  const newAppointment = await db.Appointment.create({
    doctor_id,
    patient_id,
    status_id,
    date,
    notes,
  });

  // Fetch related data for Doctor and Patient directly from the User table
  const doctor = await db.User.findByPk(doctor_id);
  const patient = await db.User.findByPk(patient_id);

  newAppointment.setDataValue('doctor', doctor);
  newAppointment.setDataValue('patient', patient);

  return newAppointment;
}

module.exports = createAppointmentResolver;
