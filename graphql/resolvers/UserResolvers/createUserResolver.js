const db = require('../../../models')
const bcrypt = require('bcrypt');

const createUserResolver = async (_, { user }) => {
  const { first_name, last_name, password, email, address, gender } = user
  const encryptedPassword = await bcrypt.hash(password, 10); // salt rounds = 10
  const newUser = await db.User.create({
    first_name,
    last_name,
    password: encryptedPassword,
    email,
    address,
    gender,
  })

  return newUser
}

module.exports = createUserResolver
