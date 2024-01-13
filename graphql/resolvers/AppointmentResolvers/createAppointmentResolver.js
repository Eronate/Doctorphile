const db = require('../../../models');

// const createAppointmentResolver = async (_, { appointment }) => {
//   const { doctor_id, patient_id, status_id, date, notes } = appointment;

//   try {
//     const doctor = await db.Doctor.findOne({ where: { user_id: doctor_id } });
//     const patient = await db.Patient.findOne({ where: { user_id: patient_id } });

//     console.log(doctor)

//     if (!doctor || !patient) {
//       throw new Error('Doctor or Patient not found');
//     }

//     const newAppointment = await db.Appointment.create({
//       doctor_id: doctor.id,
//       patient_id: patient.id,
//       status_id,
//       date: new Date(date),
//       notes,
//     });

//     return newAppointment;
//   } catch (error) {
//     console.error('Error creating appointment:', error);
//     throw error;
//   }
// };

// module.exports = createAppointmentResolver;

const createAppointmentResolver = async (_, { appointment }) => {
  const { doctor_id, patient_id, status_id, date, notes } = appointment;

  try {
    const doctor = await db.Doctor.findOne({ where: { user_id: doctor_id } });
    const patient = await db.Patient.findOne({ where: { user_id: patient_id } });

    console.log(doctor);

    if (!doctor || !patient) {
      throw new Error('Doctor or Patient not found');
    }

    const newAppointment = await db.Appointment.create({
      doctor_id: doctor.id,
      patient_id: patient.id,
      status_id,
      date: new Date(date),
      notes,
    });

    return newAppointment;
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
};

module.exports = createAppointmentResolver;
