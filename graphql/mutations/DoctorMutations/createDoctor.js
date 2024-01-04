const db = require('../../db')

const { GraphQLString, GraphQLNonNull } = require('graphql')

const DoctorType = require('../../types/doctorType')
const doctorInputType = require('../../types/InputTypes/doctorInputType')
const createDoctorResolver = require('../../resolvers/DoctorResolvers/createDoctorResolver')

const createDoctor = {
  type: DoctorType,
  args: {
    doctor: {
      type: doctorInputType,
    },
  },
  resolve: createDoctorResolver,
}

module.exports = createDoctor
