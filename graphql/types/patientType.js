const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} = require('graphql')
const UserType = require('./userType')
const { GraphQLObjectType } = require('graphql/type/definition')
const patientType = new GraphQLObjectType({
  name: 'PatientType',
  fields: {
    user_id: {
      type: GraphQLID,
    },
    user: {
      type: UserType,
      resolve: (patient) => {
        return patient.getUser()
      },
    },
  },
})

module.exports = patientType
