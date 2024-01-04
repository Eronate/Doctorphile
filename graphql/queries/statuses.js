const { 
    GraphQLList
} = require('graphql');
  
const db = require('../../models');
  
const StatusType = require('../types/statusType');
  
const statusesQuery = {
    type: new GraphQLList(StatusType),
    resolve: (_, args, status) => {
        return db.Status.findAll();
    },
}
  
module.exports = statusesQuery;