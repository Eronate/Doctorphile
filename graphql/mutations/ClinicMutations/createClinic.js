const db = require('../../db');

const { 
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');

const ClinicType = require('../../types/clinicType');
const clinicInputType = require('../../types/clinicInputType');
const createClinicResolver = require('../resolvers/createClinicResolver');

const createClinic = {
    type: ClinicType,
    args: {
      clinic: {
        type: clinicInputType,
      },
    },
    resolve: createClinicResolver,
}

module.exports = createClinic;