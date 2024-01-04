const { 
    GraphQLInputObjectType, 
    GraphQLString, GraphQLNonNull 
} = require('graphql');

const clinicInputType = new GraphQLInputObjectType({
    name: "ClinicInputType",
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        address: {
            type: new GraphQLNonNull(GraphQLString),
        },
    }
});

module.exports = clinicInputType;