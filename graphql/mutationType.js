const { 
    GraphQLObjectType, 
} = require('graphql');
const createUser = require('./mutations/createUser');
const updateUser = require('./mutations/updateUser');
const deleteUser = require('./mutations/deleteUser');
const createSpecialization = require('./mutations/createSpecialization');
const deleteSpecialization = require('./mutations/deleteSpecialization');
const updateSpecialization = require('./mutations/updateSpecialization');
const createClinic = require('./mutations/createClinic');
const updateClinic = require('./mutations/updateClinic');
const deleteClinic = require('./mutations/deleteClinic');
const createStatus = require('./mutations/createStatus');
const updateStatus = require('./mutations/updateStatus');
const deleteStatus = require('./mutations/deleteStatus');


const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: createUser,
        updateUser: updateUser,
        deleteUser: deleteUser,
        createSpecialization: createSpecialization,
        updateSpecialization: updateSpecialization,
        deleteSpecialization: deleteSpecialization,
        createClinic: createClinic,
        updateClinic: updateClinic,
        deleteClinic: deleteClinic,
        createStatus: createStatus,
        updateStatus: updateStatus,
        deleteStatus: deleteStatus,
    }
})

module.exports = mutationType;