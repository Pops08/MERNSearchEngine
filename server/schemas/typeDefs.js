// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    myBooks: [Book]
  }

  type Book {
    _id: ID
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input authorInput {
    Authname: String
  }

  type Query {
    me: User
    users: [User]
    book: [Book]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      username: String!, 
      email: String!, 
      password: String!
    ): Auth
    saveBooks(
      authors: [authorInput],
      description: String!,
      title: String!,
      bookId: ID,
      image: String,
      link: String
    ): User

  }
`;

// export the typeDefs
module.exports = typeDefs;