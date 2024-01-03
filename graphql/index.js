const { GraphQLSchema } = require('graphql');
const QueryType = require('./queryType');
const MutationType = require('./mutationType');

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

module.exports = schema;