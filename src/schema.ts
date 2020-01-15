import axios from 'axios';
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
} from 'graphql';

import launchType from './types/launch';
import rocketType from './types/rocket';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {  
    launches: {
      type: new GraphQLList(launchType),
      description: 'Get all rocket launch details',
      resolve() {
        return axios.get('https://api.spacexdata.com/v3/launches')
          .then(res => res.data);
      }  
    },
    launch: {
      type: launchType,
      description: 'Gets a rocket launch details',
      args: {
        flight_number: {type: GraphQLInt}
      },
      resolve(_parent, args) {
        return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
          .then(res => res.data);
      }
    },
    rockets: {
      type: new GraphQLList(rocketType),
      description: 'Get all rocket details',
      resolve() {
        return axios.get('https://api.spacexdata.com/v3/rockets')
          .then(res => res.data);
      }
    },
    rocket: {
      type: rocketType,
      description: 'Gets the details of a rocket',
      args: {
        rocket_id: {
          type: GraphQLInt
        }
      },
      resolve(_parent, args) {
        return axios.get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`)
          .then(res => res.data);
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQuery
});
export default schema;