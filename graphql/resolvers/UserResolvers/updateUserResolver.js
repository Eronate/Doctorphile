const db = require('../../../models')
const bcrypt = require('bcrypt');
const updateUserResolver = async (_, args) => {
  const { id, user } = args

  const targetUser = await db.User.findByPk(id)

  if (!targetUser) {
    return null
  }
  if(user.password) {
    const encryptedPassword = await bcrypt.hash(user.password, 10); // salt rounds = 10
    user.password = encryptedPassword
  }
  const updatedUser = await targetUser.update({
    ...user,
  })

  return updatedUser
}

module.exports = updateUserResolver
