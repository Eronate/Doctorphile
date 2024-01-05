const db = require('./db')

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} = require('graphql')

// const userQuery = require('./queries/user');
// const usersQuery = require('./queries/users');
// const postQuery = require('./queries/post');

// const queryType = new GraphQLObjectType({
//     name: 'Query',
//     fields: {
//       users: usersQuery,
//       user: userQuery,
//       post: postQuery,
//     }
// })
const usersQuery = require('./queries/users')
const specializationQuery = require('./queries/specializations')
const clinicsQuery = require('./queries/clinics')
const statusesQuery = require('./queries/statuses')
const doctorsQuery = require('./queries/doctors')
const patientsQuery = require('./queries/patients')
const appointmentsQuery = require('./queries/appointments')

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: usersQuery,
    specializations: specializationQuery,
    clinics: clinicsQuery,
    statuses: statusesQuery,
    doctors: doctorsQuery,
    patients: patientsQuery,
    appointments: appointmentsQuery,
  },
})

module.exports = queryType
