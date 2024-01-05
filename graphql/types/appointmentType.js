const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')


const UserType = require('./userType');
const StatusType = require('./statusType');
const DateType = require('./DateType');


const AppointmentType = new GraphQLObjectType({
    name: 'Appointment',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        doctor: {
            type: UserType,
            resolve: (appointment) => {
                return appointment.getDoctor()
            },
        },
        patient: {
            type: UserType,
            resolve: (appointment) => {
                return appointment.getPatient()
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
                return appointment.getDate()
            },
        },
        notes: {
            type: GraphQLString,
        },
    })
});

module.exports = UserType;
