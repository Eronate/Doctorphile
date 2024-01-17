const db = require('../../db')

const { GraphQLString, GraphQLNonNull, GraphQLID } = require('graphql')

const patientType = require('../../types/patientType')
const patientInputType = require('../../types/InputTypes/patientInputType')
const updatePatientResolver = require('../../resolvers/PatientResolvers/updatePatientResolver')

const updatePatient = {
  type: patientType,
  args: {
    id: {
      type: GraphQLID,
    },
    patient: {
      type: patientInputType,
    },
  },
  resolve: updatePatientResolver,
}

module.exports = updatePatient
