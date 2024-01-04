const db = require('../../db')

const { GraphQLString, GraphQLNonNull } = require('graphql')

const ClinicType = require('../../types/clinicType')
const clinicInputType = require('../../types/InputTypes/clinicInputType')
const createClinicResolver = require('../../resolvers/ClinicResolvers/createClinicResolver')

const createClinic = {
  type: ClinicType,
  args: {
    clinic: {
      type: clinicInputType,
    },
  },
  resolve: createClinicResolver,
}

module.exports = createClinic
