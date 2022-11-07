
import {gql} from '@apollo/client';

const GET_CLIENTS = gql`
query getClients {
   clients {
       name
       id
       email
       phone
       date
     }
}
`;

export {GET_CLIENTS};