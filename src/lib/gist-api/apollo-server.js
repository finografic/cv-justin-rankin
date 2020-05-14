import { ApolloServer } from 'apollo-server';
import gql from 'graphql-tag';
import { tradeTokenForUser } from './auth-helpers';

const HEADER_NAME = 'authorization';

const typeDefs = gql`
  type Query {
    me: User
  }
  type User {
    id: ID!
    username: String!
  }
`;

const resolvers = {
  Query: {
    me: (root, args, context) => context.currentUser,
  },
  User: {
    id: (user) => user._id,
    username: (user) => user.username,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let authToken = null;
    let currentUser = null;

    try {
      authToken = req.headers[HEADER_NAME];

      if (authToken) {
        currentUser = await tradeTokenForUser(authToken);
      }
    } catch (e) {
      console.warn(`Unable to authenticate using auth token: ${authToken}`);
    }

    return {
      authToken,
      currentUser,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
