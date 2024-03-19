// import { gql } from '@apollo/client';

//  export const ADD_IDEA = gql`
//    mutation addIdea($ideaTitle: String!, $ideaText: String!) {
//      addIdea(ideaText: $ideaText, ideaTitle: $ideaTitle) {
//        _id
//        ideaText
//        ideaTitle
//      }
//    }
//  `;

// export const ADD_COMMENT = gql`
//   mutation addComment($reviewId: ID!, $commentText: String!) {
//     addComment(reviewId: $reviewId, commentText: $commentText) {
//       _id
//       reviewText
//       reviewAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         commentAuthor
//         createdAt
//       }
//     }
//   }
// `;

// export const ADD_PROFILE = gql`
//   mutation addProfile($name: String!, $email: String!, $password: String!) {
//     addProfile(name: $name, email: $email, password: $password) {
//       token
//       profile {
//         _id
//         name
//       }
//     }
//   }
// `;

// export const LOGIN_USER = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const ADD_USER = gql`
//   mutation addUser($email: String!, $password: String!) {
//     addUser(email: $email, password: $password) {
//       token
//       user {
//         _id
//         email
//       }
//     }
//   }
// `;