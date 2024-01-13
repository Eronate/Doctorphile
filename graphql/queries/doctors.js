const { GraphQLList } = require('graphql');
const db = require('../../models');
const DoctorType = require('../types/doctorType');

const doctorsQuery = {
  type: new GraphQLList(DoctorType),
  resolve: async (_, args) => {
    try {
      const doctors = await db.Doctor.findAll({
        include: [
          { model: db.User },
          { model: db.Specialization },
          { model: db.Clinic }
        ]
      });
      return doctors;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = doctorsQuery;
