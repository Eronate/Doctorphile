const { 
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');

const updateSpecializationResolver = require('../resolvers/updateSpecializationResolver');
const SpecializationType = require('../../types/specializationType');
const specializationInputType = require('../../types/specializationInputType');

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

module.exports = updateSpecialization;