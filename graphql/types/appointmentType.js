const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')


const UserType = require('./userType');
const StatusType = require('./statusType');
const DateType = require('./DateType');
const db = require('../../models')

const AppointmentType = new GraphQLObjectType({
    name: 'Appointment',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        doctor: {
            type: UserType,
            resolve: (appointment) => {
                return db.Doctor.findByPk(appointment.doctor_id)
            },
        },
        patient: {
            type: UserType,
            resolve: (appointment) => {
                return db.Patient.findByPk(appointment.patient_id)
            },
        },
        status: {
            type: StatusType,
            resolve: (appointment) => {
                return appointment.getStatus()
            }
        },
        date: {
            type: DateType,
            resolve: (appointment) => {
                return appointment.date
            },
        },
        notes: {
            type: GraphQLString,
        },
    })
});

module.exports = AppointmentType;
