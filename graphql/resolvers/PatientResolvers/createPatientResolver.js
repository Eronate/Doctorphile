const db = require('../../../models')
const bcrypt = require('bcrypt')
const createPatientResolver = async (_, { patient }) => {
  const { first_name, last_name, password, email, address, gender } = patient
  const encryptedPass = await bcrypt.hash(password, 10);
  const newUser = await db.User.create({
    first_name,
    last_name,
    password: encryptedPass,
    email,
    address,
    gender,
  })
  const newPatient = await db.Patient.create({
    user_id: newUser.id,
  })

  return newPatient
}

module.exports = createPatientResolver
