const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } = require('graphql')


const DateType = require('../DateType');


const AppointmentInputType = new GraphQLInputObjectType({
    name: 'AppointmentInputType',
    fields: {
        doctor_id: {
            type: new GraphQLNonNull(GraphQLString),
        },
        patient_id: {
            type: new GraphQLNonNull(GraphQLString),
        },
        status_id: {
            type: new GraphQLNonNull(GraphQLString),
        },
        date : {
            type : new GraphQLNonNull(DateType),
        },
        notes: {
            type: GraphQLString,
        },
    }
});

module.exports = AppointmentInputType;
