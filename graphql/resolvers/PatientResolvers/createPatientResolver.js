const db = require('../../../models')

const createPatientResolver = async (_, { patient }) => {
  const { first_name, last_name, password, email, address, gender } = patient

  const newUser = await db.User.create({
    first_name,
    last_name,
    password,
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
