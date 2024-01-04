const { GraphQLList } = require('graphql')

const db = require('../../models')

const SpecializationType = require('../types/specializationType')

const specializationQuery = {
  type: new GraphQLList(SpecializationType),
  resolve: (_, args) => {
    return db.Specialization.findAll()
  },
}

module.exports = specializationQuery
