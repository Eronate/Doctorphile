const { GraphQLList } = require('graphql')

const db = require('../../models')

const ClinicType = require('../types/clinicType')

const clinicsQuery = {
  type: new GraphQLList(ClinicType),
  resolve: (_, args) => {
    return db.Clinic.findAll()
  },
}

module.exports = clinicsQuery
