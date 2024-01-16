const db = require('../../../models')

const deleteClinicResolver = async (_, args) => {
  const { id } = args

  const targetClinic = await db.Clinic.findByPk(id)

  if (!targetClinic) {
    return null
  }

  try {
    const associatedDoctor = await db.Doctor.findOne({ where: { clinic_id: id}})
    if(associatedDoctor){
      await associatedDoctor.destroy()
    }
    await targetClinic.destroy()

    return true
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = deleteClinicResolver
