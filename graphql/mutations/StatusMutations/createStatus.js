const db = require('../../db');

const { 
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');

const StatusType = require('../../types/statusType');
const statusInputType = require('../../types/statusInputType');
const createStatusResolver = require('../resolvers/createStatusResolver');

const createStatus = {
    type: StatusType,
    args: {
      status: {
        type: statusInputType,
      },
    },
    resolve: createStatusResolver,
}

module.exports = createStatus;