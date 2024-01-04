const db = require('../../db')

const { GraphQLString, GraphQLNonNull } = require('graphql')
const UserType = require('../../types/userType')
const createUserResolver = require('../resolvers/createUserResolver')
const userInputType = require('../../types/InputTypes/userInputType')

const createUser = {
  type: UserType,
  args: {
    user: {
      type: userInputType,
    },
  },
  resolve: createUserResolver,
}

module.exports = createUser
