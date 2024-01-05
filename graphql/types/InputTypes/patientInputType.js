const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql')
const UserInputType = require('./userInputType')

const patientInputType = new GraphQLInputObjectType({
  name: 'PatientInputType',
  fields: {
    ...UserInputType.getFields(),
  },
})

module.exports = patientInputType
