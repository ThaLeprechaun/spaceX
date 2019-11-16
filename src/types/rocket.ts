import { GraphQLObjectType, GraphQLString } from 'graphql';

const rocketType = new GraphQLObjectType({
  name: 'Rocket',
  description: 'Describes the details of a rocket',
  fields: () => ({
    rocket_id: {
      type: GraphQLString,
      description: 'The ID of a rocket flight'
    },
    rocket_name: {
      type: GraphQLString,
      description: 'Describes Rocket name'
    },
    rocket_type: {
      type: GraphQLString,
      description: 'Describes the type of rocket'
    }
  })
});

export default rocketType;