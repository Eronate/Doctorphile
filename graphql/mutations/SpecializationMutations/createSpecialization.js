const { GraphQLString, GraphQLNonNull } = require('graphql')
const SpecializationType = require('../../types/specializationType')
const createSpecializationResolver = require('../resolvers/createSpecializationResolver')
const specializationInputType = require('../../types/InputTypes/specializationInputType')

const createSpecialization = {
  type: SpecializationType,
  args: {
    specialization: {
      type: specializationInputType,
    },
  },
  resolve: createSpecializationResolver,
}

module.exports = createSpecialization
