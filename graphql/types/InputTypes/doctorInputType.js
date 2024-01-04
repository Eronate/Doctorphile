const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql')

const userInputType = require('./userInputType')

const DoctorInputType = new GraphQLInputObjectType({
  name: 'DoctorInputType',
  fields: {
    ...userInputType.getFields(),
    specialization_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    clinic_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
})

module.exports = DoctorInputType
