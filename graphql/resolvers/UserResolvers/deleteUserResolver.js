const db = require('../../../models')

const deleteUserResolver = async (_, args) => {
  const { id } = args

  const targetUser = await db.User.findByPk(id)

  if (!targetUser) {
    return null
  }

  try {

    const associatedDoctor = await db.Doctor.findOne({ where: { user_id: id}})
    if(associatedDoctor){
      await associatedDoctor.destroy()
    }

    await targetUser.destroy()

    return true
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = deleteUserResolver
