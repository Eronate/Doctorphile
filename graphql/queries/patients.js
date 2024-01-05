const { GraphQLList } = require('graphql')

const db = require('../../models')

const PatientType = require('../types/patientType')

const patientQuery = {
  type: new GraphQLList(PatientType),
  resolve: (_, args) => {
    return db.Patient.findAll()
  },
}

module.exports = patientQuery
