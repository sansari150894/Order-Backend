const {gql } = require('apollo-server-express');

const schema = gql`
  type Product {
    name: String
    price: Int
    weight: Int
  }
  type Query {
    listProducts: [Product]
  }
`;

module.exports = {
    schema
}