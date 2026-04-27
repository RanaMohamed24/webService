
const { gql } = require('graphql-tag');

const typeDefs = gql`
  type User {
    id: ID!
    fullname: String!
    email: String!
    dob: String!
  }

  type Comment {
    id: ID!
    title: String!
    content: String!
  }

  type Article {
    id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment!]!
  }

  type Query {
    articles: [Article!]!
    article(id: ID!): Article
  }

  type Mutation {
    createArticle(title: String!, content: String!, authorId: ID!): Article!
  }
`;

module.exports = { typeDefs };
