import { gql } from '@apollo/client';

const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!, $date:String!) {
    addClient(name: $name, email: $email, phone: $phone, date: $date) {
      id
      name
      email
      phone
      date
    }
  }
`;
const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
      date
    }
  }
`;


export { ADD_CLIENT, DELETE_CLIENT };