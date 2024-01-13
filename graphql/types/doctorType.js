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
    // user: {
    //   type: UserType,
    //   resolve: (doctor) => {
    //     return doctor.getUser()
    //   },
    // },
    // specialization: {
    //   type: SpecializationType,
    //   resolve: (doctor) => {
    //     return doctor.getSpecialization()
    //   },
    // },
    // clinic: {
    //   type: ClinicType,
    //   resolve: (doctor) => {
    //     return doctor.getClinic()
    //   },
    // },
    first_name: {
      type: GraphQLString,
      resolve: (doctor) => {
        return doctor.getUser().then((user) => user.first_name)
      },
    },
    last_name: {
      type: GraphQLString,
      resolve: (doctor) => {
        return doctor.getUser().then((user) => user.last_name)
      },
    },
    email: {
      type: GraphQLString,
      resolve: (doctor) => {
        return doctor.getUser().then((user) => user.email)
      }
    },
    address: {
      type: GraphQLString,
      resolve: (doctor) => {
        return doctor.getUser().then((user) => user.address)
      }
    },
    gender: {
      type: GraphQLString,
      resolve: (doctor) => {
        return doctor.getUser().then((user) => user.gender)
      }
    },
    specialization_name: {
      type: GraphQLString,
      resolve: (doctor) => {
        return doctor.getSpecialization().then((specialization) => specialization.name)
      },
    },
    clinic_name: {
      type: GraphQLString,
      resolve: (doctor) => {
        return doctor.getClinic().then((clinic) => clinic.name)
      },
    },
    clinic_address: {
      type: GraphQLString,
      resolve: (doctor) => {
        return doctor.getClinic().then((clinic) => clinic.address)
      },
    },
  }),
})

module.exports = DoctorType
