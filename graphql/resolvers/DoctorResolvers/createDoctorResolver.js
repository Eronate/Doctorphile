const db = require('../../../models')
const bcrypt = require('bcrypt')
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
  const encryptedPass = await bcrypt.hash(password, 10);

  const newUser = await db.User.create({
    first_name,
    last_name,
    password: encryptedPass,
    email,
    address,
    gender,
  })

  const newDoctor = await db.Doctor.create({
    user_id: newUser.id,
    specialization_id,
    clinic_id,
  })

  return newDoctor
}

module.exports = createDoctorResolver
