const db = require('../../db')

const { GraphQLString, GraphQLNonNull } = require('graphql')

const patientType = require('../../types/patientType')
const patientInputType = require('../../types/InputTypes/patientInputType')
const createPatientResolver = require('../../resolvers/PatientResolvers/createPatientResolver')

const createPatient = {
  type: patientType,
  args: {
    patient: {
      type: patientInputType,
    },
  },
  resolve: createPatientResolver,
}

module.exports = createPatient
