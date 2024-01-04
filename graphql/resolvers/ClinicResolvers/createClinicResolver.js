const db = require('../../../models')

const createClinicResolver = async (_, { clinic }) => {
  const { name, address } = clinic
  console.log(clinic)
  console.log(db.Clinic)
  const newClinic = await db.Clinic.create({
    name,
    address,
  })

  return newClinic
}

module.exports = createClinicResolver
