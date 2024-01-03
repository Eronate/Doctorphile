const db = require('../../models');

const createUserResolver = async (_, { user }) => {
    const { first_name, last_name, password, 
        email, address, gender, created_at } = user;
    console.log(user)
    console.log(db.User)
    const newUser = await db.User.create({
        first_name,
        last_name,
        password,
        email,
        address,
        gender,
        created_at,
    });
  
    return newUser;
}

module.exports = createUserResolver;