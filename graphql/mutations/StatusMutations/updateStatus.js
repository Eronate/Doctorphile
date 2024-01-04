const { GraphQLNonNull, GraphQLID } = require('graphql')

const StatusType = require('../../types/statusType')
const statusInputType = require('../../types/InputTypes/statusInputType')
const updateStatusResolver = require('../../resolvers/StatusResolvers/updateStatusResolver')

const updateStatus = {
  type: StatusType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    status: {
      type: statusInputType,
    },
  },
  resolve: updateStatusResolver,
}

module.exports = updateStatus
