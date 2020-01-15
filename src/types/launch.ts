import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql';

const launchType = new GraphQLObjectType({
  name: 'Launch',
  description: 'Describes the launch details of rocket',
  fields: () => ({
    flight_number: {
      type: GraphQLInt,
      description: 'The flight number of a rocket'
    },
    mission_name: {
      type: GraphQLString,
      description: 'Describes mission name'
    },
    launch_year: {
      type: GraphQLString,
      description: 'Describes the year of launch'
    },
    launch_date_local: {
      type: GraphQLString,
      description: 'Describes the year of launch'
    },
    launch_success: {
      type: GraphQLBoolean,
      description: 'Describes the status of the flight'
    }
  }),
});

export default launchType;