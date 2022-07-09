import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    posts: [Post!]!
  }

  type Mutation {
    postCreate(post: PostInput!): PostPayload!
    postUpdate(postId: Int, post: PostInput!): PostPayload!
  }

  type Post {
    id: ID!
    title: String
    content: String
    published: Boolean
    cteatedAt: String
    user: User
  }

  type User {
    id: ID!
    email: String
    name: String
    cteatedAt: String
    profile: Profile
    posts: [Post!]!
  }

  type Profile {
    id: ID!
    bio: String
    user: User
  }

  type UserError {
    message: String!
  }

  type PostPayload {
    userErrors: [UserError]!
    post: Post
  }

  input PostInput {
    title: String
    content: String
  }
`;
