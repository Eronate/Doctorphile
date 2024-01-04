const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} = require('graphql')

const patientType = new GraphQLInputObjectType({
  name: 'PatientType',
  fields: {
    user_id: {
      type: GraphQLID,
    },
  },
})

module.exports = patientType
