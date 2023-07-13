import { gql } from "@apollo/client";

const GET_ALL_CHARACTERS = gql`
  query {
    characters {
      id
      name
      homeworld
      image
      cybernetics
      affiliations
    }
  }
`;

export default GET_ALL_CHARACTERS;
