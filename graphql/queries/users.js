const { GraphQLList } = require('graphql');
const db = require('../../models');
const UserType = require('../types/userType');

const usersQuery = {
  type: new GraphQLList(UserType),
  resolve: async (_, args) => {
    try {
      const users = await db.User.findAll(); 
      return users;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = usersQuery;
