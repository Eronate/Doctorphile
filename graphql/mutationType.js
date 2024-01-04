const { GraphQLObjectType } = require('graphql')
const createUser = require('./mutations/UserMutations/createUser')
const updateUser = require('./mutations/UserMutations/updateUser')
const deleteUser = require('./mutations/UserMutations/deleteUser')
const createSpecialization = require('./mutations/SpecializationMutations/createSpecialization')
const deleteSpecialization = require('./mutations/SpecializationMutations/deleteSpecialization')
const updateSpecialization = require('./mutations/SpecializationMutations/updateSpecialization')
const createClinic = require('./mutations/ClinicMutations/createClinic')
const updateClinic = require('./mutations/ClinicMutations/updateClinic')
const deleteClinic = require('./mutations/ClinicMutations/deleteClinic')
const createStatus = require('./mutations/StatusMutations/createStatus')
const updateStatus = require('./mutations/StatusMutations/updateStatus')
const deleteStatus = require('./mutations/StatusMutations/deleteStatus')
const createDoctor = require('./mutations/DoctorMutations/createDoctor')
const updateDoctor = require('./mutations/DoctorMutations/updateDoctor')
const deleteDoctor = require('./mutations/DoctorMutations/deleteDoctor')

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
    createDoctor: createDoctor,
    updateDoctor: updateDoctor,
    deleteDoctor: deleteDoctor,
  },
})

module.exports = mutationType
