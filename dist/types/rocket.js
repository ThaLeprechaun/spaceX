"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const rocketType = new graphql_1.GraphQLObjectType({
    name: 'Rocket',
    description: 'Describes the details of a rocket',
    fields: () => ({
        rocket_id: {
            type: graphql_1.GraphQLString,
            description: 'The ID of a rocket flight'
        },
        rocket_name: {
            type: graphql_1.GraphQLString,
            description: 'Describes Rocket name'
        },
        rocket_type: {
            type: graphql_1.GraphQLString,
            description: 'Describes the type of rocket'
        }
    })
});
exports.default = rocketType;
//# sourceMappingURL=rocket.js.map