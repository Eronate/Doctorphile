const db = require('../../../models')

const updateDoctorResolver = async (_, args) => {
  const { id, doctor } = args

  const targetDoctor = await db.Doctor.findByPk(id)

  if (!targetDoctor) {
    return null
  }

  const updatedDoctor = await targetDoctor.update({
    ...doctor,
  })

  return updatedDoctor
}

module.exports = updateDoctorResolver
