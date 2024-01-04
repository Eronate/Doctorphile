const { GraphQLNonNull, GraphQLID } = require('graphql')
const UserType = require('../../types/userType')
const updateUserResolver = require('../../resolvers/UserResolvers/updateUserResolver')
const userInputType = require('../../types/InputTypes/userInputType')

const updateUser = {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    user: {
      type: userInputType,
    },
  },
  resolve: updateUserResolver,
}

module.exports = updateUser
