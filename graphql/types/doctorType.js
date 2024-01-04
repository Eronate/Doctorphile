const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} = require('graphql')

const SpecializationType = require('./specializationType')
const ClinicType = require('./clinicType')
const UserType = require('./userType')

const DoctorType = new GraphQLObjectType({
  name: 'Doctor',
  fields: () => ({
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    user: {
      type: UserType,
      resolve: (doctor) => {
        return doctor.getUser()
      },
    },
    specialization: {
      type: SpecializationType,
      resolve: (doctor) => {
        return doctor.getSpecialization()
      },
    },
    clinic: {
      type: ClinicType,
      resolve: (doctor) => {
        return doctor.getClinic()
      },
    },
  }),
})

module.exports = DoctorType
