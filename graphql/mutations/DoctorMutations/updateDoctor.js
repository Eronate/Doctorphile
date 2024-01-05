const { GraphQLNonNull, GraphQLID } = require('graphql')

const DoctorType = require('../../types/doctorType')
const doctorInputType = require('../../types/InputTypes/doctorInputType')
const updateDoctorResolver = require('../../resolvers/DoctorResolvers/updateDoctorResolver')

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
  resolve: updateDoctorResolver,
}

module.exports = updateDoctor
