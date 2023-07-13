import { useQuery } from "@apollo/client";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../components/Spinner";
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

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const Name = styled.h1`
  font-weight: 900;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: ${props => props.theme.accent};
`;

const A = styled.a`
  color: ${props => props.theme.fg};
`;

const Td = styled.td`
  border-top: 0.125rem solid ${props => props.theme.accent};
  border-bottom: 0.125rem solid ${props => props.theme.accent};
  padding: 0.5rem;
  min-width: 8rem;
`;

const Tr = styled.tr`
  & ${Td}:nth-child(2) {
    font-weight: bold;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

const TBody = styled.tbody`
  & ${Tr}:nth-child(2n) {
    background-color: rgba(
      ${props => props.theme.accentR},
      ${props => props.theme.accentG},
      ${props => props.theme.accentB},
      0.2
    );
  }
`;

const AffiliationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.accent};
`;

const Affiliation = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: bolder;
  background-color: rgba(
    ${props => props.theme.accentR},
    ${props => props.theme.accentG},
    ${props => props.theme.accentB},
    0.2
  );
`;

const capitalize = words => {
  if (!words) return "-";
  return words
    .split(" ")
    .map(word => {
      if (word.length < 1) return "";
      else if (word === "of" || word === "to" || word === "and") return word.toLowerCase();
      else return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
};

const yearFormat = year => {
  if (!year) return "-";
  return year < 0
    ? `${-year} BBY (Before the Battle of Yavin)`
    : `${year} ABY (After the Battle of Yavin)`;
};

function Detail() {
  const { characterId } = useParams();

  const { error, loading, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { characterId: parseInt(characterId, 10) },
  });

  if (error) {
    return <h1>There is an error</h1>;
  }

  if (loading) {
    return <Spinner />;
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
  } = data.character;

  return (
    <Container>
      <Image src={image} />

      <TopSection>
        <Name>{name}</Name>
        <A href={wiki} target="_blank" rel="noreferrer">
          Wiki <FaExternalLinkAlt />
        </A>
      </TopSection>

      <Table>
        <TBody>
          <Tr>
            <Td>Home World</Td>
            <Td>{capitalize(homeworld)}</Td>
          </Tr>
          <Tr>
            <Td>Height</Td>
            <Td>{height ? `${height} meters` : "-"}</Td>
          </Tr>
          <Tr>
            <Td>Mass</Td>
            <Td>{mass ? `${mass} kilograms` : "-"}</Td>
          </Tr>
          <Tr>
            <Td>Gender</Td>
            <Td>{capitalize(gender)}</Td>
          </Tr>
          <Tr>
            <Td>Born Year</Td>
            <Td>{yearFormat(born) || "-"}</Td>
          </Tr>
          <Tr>
            <Td>Born Location</Td>
            <Td>{capitalize(bornLocation)}</Td>
          </Tr>
          <Tr>
            <Td>Died Year</Td>
            <Td>{yearFormat(died) || "-"}</Td>
          </Tr>
          <Tr>
            <Td>Died Location</Td>
            <Td>{capitalize(diedLocation)}</Td>
          </Tr>
          <Tr>
            <Td>Species</Td>
            <Td>{capitalize(species)}</Td>
          </Tr>
          <Tr>
            <Td>Hair Color</Td>
            <Td>{capitalize(hairColor)}</Td>
          </Tr>
          <Tr>
            <Td>Eye Color</Td>
            <Td>{capitalize(eyeColor)}</Td>
          </Tr>
          <Tr>
            <Td>Skin Color</Td>
            <Td>{capitalize(skinColor)}</Td>
          </Tr>
          <Tr>
            <Td>Cybernetics</Td>
            <Td>{capitalize(cybernetics)}</Td>
          </Tr>
        </TBody>
      </Table>

      <Title>Affiliations</Title>
      <AffiliationsContainer>
        {affiliations.length > 0
          ? affiliations.map(affiliation => (
              <Affiliation key={affiliation}>
                {capitalize(affiliation)}
              </Affiliation>
            ))
          : "No Affiliations"}
      </AffiliationsContainer>

      <Title>Former Affiliations</Title>
      <AffiliationsContainer>
        {formerAffiliations.length > 0
          ? formerAffiliations.map(affiliation => (
              <Affiliation key={affiliation}>
                {capitalize(affiliation)}
              </Affiliation>
            ))
          : "No Former Affiliations"}
      </AffiliationsContainer>
    </Container>
  );
}

export default Detail;
