const db = require('../../../models')

const createUserResolver = async (_, { user }) => {
  const { first_name, last_name, password, email, address, gender } = user
  console.log(user)
  const newUser = await db.User.create({
    first_name,
    last_name,
    password,
    email,
    address,
    gender,
  })

  return newUser
}

module.exports = createUserResolver
