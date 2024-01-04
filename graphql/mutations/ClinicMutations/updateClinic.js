const { GraphQLNonNull, GraphQLID } = require('graphql')

const ClinicType = require('../../types/clinicType')
const clinicInputType = require('../../types/InputTypes/clinicInputType')
const updateClinicResolver = require('../resolvers/updateClinicResolver')

const updateClinic = {
  type: ClinicType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    clinic: {
      type: clinicInputType,
    },
  },
  resolve: updateClinicResolver,
}

module.exports = updateClinic
