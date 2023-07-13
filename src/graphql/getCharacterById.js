import { gql } from "@apollo/client";

const GET_CHARACTER_BY_ID = gql`
  query ($characterId: Int!) {
    character(id: $characterId) {
      id
      name
      height
      mass
      gender
      homeworld
      wiki
      image
      born
      bornLocation
      died
      diedLocation
      species
      hairColor
      eyeColor
      skinColor
      cybernetics
      affiliations
      formerAffiliations
    }
  }
`;

export default GET_CHARACTER_BY_ID;
