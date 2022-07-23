import { useQuery } from "@apollo/client";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GET_CHARACTER_BY_ID from "../graphql/getCharacterById";

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 0.125rem solid ${props => props.theme.accent};
`;

const Container = styled.div`
  padding: 1rem;
`;

const DataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: center;
  margin-top: 1rem;
  row-gap: 0.25rem;
`;

function Detail() {
  const { characterId } = useParams();

  const { error, loading, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { characterId: parseInt(characterId, 10) },
  });

  if (error) {
    return <h1>There is an error</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const {
    name,
    height,
    mass,
    gender,
    homeworld,
    wiki,
    image,
    born,
    bornLocation,
    died,
    diedLocation,
    species,
    hairColor,
    eyeColor,
    skinColor,
    cybernetics,
    affiliations,
    formerAffiliations,
  } = data.getCharacterById;

  return (
    <Container>
      <Image src={image} />

      <h1>{name}</h1>
      <h3>{homeworld}</h3>
      <a href={wiki} target="_blank" rel="noreferrer">
        Wiki <FaExternalLinkAlt />
      </a>

      <DataWrapper>
        <p className={`flex asdasd ${clicked ? 'blue' : 'red'}`} >Height</p> <b>{height}m</b>
        <p>Mass</p> <b>{mass}kg</b>
        <p>Gender</p> <b>{gender}</b>
        <p>Born</p>
        <b>
          {bornLocation}, {born}
        </b>
        <p>Died</p>
        <b>
          {diedLocation}, {died}
        </b>
        <p>Species</p> <b>{species}</b>
        <p>Hair Color</p> <b>{hairColor}</b>
        <p>Eye Color</p> <b>{eyeColor}</b>
        <p>Skin Color</p> <b>{skinColor}</b>
        <p>Cybernetics</p> <b>{cybernetics}</b>
        <p>Affiliations</p>{" "}
        <ul>
          {affiliations.map(affiliation => (
            <li>
              <b>{affiliation}</b>
            </li>
          ))}
        </ul>
        <p>Former Affiliations</p>{" "}
        <ul>
          {formerAffiliations.map(affiliation => (
            <li>
              <b>{affiliation}</b>
            </li>
          ))}
        </ul>
      </DataWrapper>
    </Container>
  );
}

export default Detail;
