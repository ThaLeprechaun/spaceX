"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const launchType = new graphql_1.GraphQLObjectType({
    name: 'Launch',
    description: 'Describes the launch details of rocket',
    fields: () => ({
        flight_number: {
            type: graphql_1.GraphQLInt,
            description: 'The flight number of a rocket'
        },
        mission_name: {
            type: graphql_1.GraphQLString,
            description: 'Describes mission name'
        },
        launch_year: {
            type: graphql_1.GraphQLString,
            description: 'Describes the year of launch'
        },
        launch_success: {
            type: graphql_1.GraphQLBoolean,
            description: 'Describes the status of the flight'
        }
    }),
});
exports.default = launchType;
//# sourceMappingURL=launch.js.map