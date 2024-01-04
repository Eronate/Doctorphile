const db = require('../../../models')

const createDoctorResolver = async (_, { doctor }) => {
  const {
    first_name,
    last_name,
    password,
    email,
    address,
    gender,
    specialization_id,
    clinic_id,
  } = doctor
  console.log(doctor)

  const newDoctor = await db.Doctor.create({
    first_name,
    last_name,
    password,
    email,
    address,
    gender,
    specialization_id,
    clinic_id,
  })

  return newDoctor
}

module.exports = createDoctorResolver
