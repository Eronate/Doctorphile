const db = require('../../../models')
const bcrypt = require('bcrypt')
const createUserResolver = async (_, { user }) => {
  try{
    const { first_name, last_name, password, email, address, gender } = user;
    const encryptedPass = await bcrypt.hash(password, 10);
    const newUser = await db.User.create({
      first_name,
      last_name,
      password: encryptedPass,
      email,
      address,
      gender,
    });

    return newUser;
  }catch(error){
    console.log('Error creating user ', error);
    throw error;
  }
}

module.exports = createUserResolver
