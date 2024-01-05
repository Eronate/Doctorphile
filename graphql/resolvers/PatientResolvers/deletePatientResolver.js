const db = require('../../../models')

const deletePatientResolver = async (_, args) => {
  const { id } = args

  const targetPatient = await db.Patient.findByPk(id)

  if (!targetPatient) {
    return null
  }

  try {
    await targetPatient.destroy()

    return true
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = deletePatientResolver
