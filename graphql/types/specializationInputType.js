const { 
    GraphQLInputObjectType, 
    GraphQLString, GraphQLNonNull 
} = require('graphql');

const specializationInputType = new GraphQLInputObjectType({
    name: "SpecializationInputType",
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
    }
});

module.exports = specializationInputType;