const { ApolloServer, gql } = require('apollo-server');
const {schema} = require('./Schema');
const {resolvers} = require('./Resolver');

const server = new ApolloServer({ typeDefs: schema, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});