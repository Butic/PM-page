import { gql } from '@apollo/client';

export const GET_MINOR_USERS = gql`
  query GetUsers {
    findAllUsers {
      _id
      role
      name
      stack
    }
  }
`;

export const GET_ONE_USER = gql`
  query GetUserById($id: String!) {
    findUserByID(id: $id) {
      _id
      email
      role
      name
      stack
      projects
      sideInfo
    }
  }
`;

export const GET_ALL_REPORTS = gql`
  query GetReports {
    reports {
      _id
      projectName
      taskName
      taskDescription
      status
      author
      sideInfo
      dateOfReport
    }
  }
`;

export const GET_ONE_REPORT = gql`
query GetReport($id: String!) {
  report(id: $id) {
    _id
    projectName
    taskName
    taskDescription
    status
    author
    dateOfReport
    sideInfo
  }
}`;

export const GET_REPORTS_BY_AUTHOR = gql`
query GetReportByAuthor($author: String!) {
  authorsReports(author: $author) {
    _id
    projectName
    taskName
    taskDescription
    status
    author
    sideInfo
    dateOfReport
  }
}`;
