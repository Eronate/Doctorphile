const { GraphQLNonNull, GraphQLID } = require('graphql')

const updateSpecializationResolver = require('../../resolvers/SpecializationResolvers/updateSpecializationResolver')
const SpecializationType = require('../../types/specializationType')
const specializationInputType = require('../../types/InputTypes/specializationInputType')

const updateSpecialization = {
  type: SpecializationType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    specialization: {
      type: specializationInputType,
    },
  },
  resolve: updateSpecializationResolver,
}

module.exports = updateSpecialization
