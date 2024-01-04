const { GraphQLList } = require('graphql')

const db = require('../../models')

const DoctorType = require('../types/userType')

const doctorsQuery = {
  type: new GraphQLList(DoctorType),
  resolve: (_, args) => {
    return db.Doctors.findAll()
  },
}

module.exports = doctorsQuery
