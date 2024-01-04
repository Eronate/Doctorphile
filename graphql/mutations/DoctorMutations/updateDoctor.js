const { GraphQLNonNull, GraphQLID } = require('graphql')

const DoctorType = require('../../types/doctorType')
const doctorInputType = require('../../types/InputTypes/doctorInputType')
const createDoctorResolver = require('../resolvers/createDoctorResolver')

const updateDoctor = {
  type: DoctorType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    doctor: {
      type: doctorInputType,
    },
  },
  resolve: createDoctorResolver,
}

module.exports = updateDoctor
