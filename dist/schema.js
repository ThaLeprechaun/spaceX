"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const graphql_1 = require("graphql");
const launch_1 = __importDefault(require("./types/launch"));
const rocket_1 = __importDefault(require("./types/rocket"));
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new graphql_1.GraphQLList(launch_1.default),
            description: 'Get all rocket launch details',
            resolve() {
                return axios_1.default.get('https://api.spacexdata.com/v3/launches')
                    .then(res => res.data);
            }
        },
        launch: {
            type: launch_1.default,
            description: 'Gets a rocket launch details',
            args: {
                flight_number: { type: graphql_1.GraphQLInt }
            },
            resolve(_parent, args) {
                return axios_1.default.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                    .then(res => res.data);
            }
        },
        rockets: {
            type: new graphql_1.GraphQLList(rocket_1.default),
            description: 'Get all rocket details',
            resolve() {
                return axios_1.default.get('https://api.spacexdata.com/v3/rockets')
                    .then(res => res.data);
            }
        },
        rocket: {
            type: rocket_1.default,
            description: 'Gets the details of a rocket',
            args: {
                rocket_id: {
                    type: graphql_1.GraphQLInt
                }
            },
            resolve(_parent, args) {
                return axios_1.default.get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`)
                    .then(res => res.data);
            }
        }
    }
});
const schema = new graphql_1.GraphQLSchema({
    query: RootQuery
});
exports.default = schema;
//# sourceMappingURL=schema.js.map