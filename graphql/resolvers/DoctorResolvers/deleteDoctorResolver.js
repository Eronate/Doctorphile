const db = require('../../../models')

const deleteDoctorResolver = async (_, args) => {
  const { id } = args

  const targetDoctor = await db.Doctor.findByPk(id)

  if (!targetDoctor) {
    return null
  }

  try {
    await targetDoctor.destroy()

    return true
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = deleteDoctorResolver
