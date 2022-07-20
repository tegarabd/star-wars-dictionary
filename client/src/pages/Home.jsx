import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import GET_ALL_CHARACTERS from "../graphql/getAllCharacters";
import styled from "styled-components";
import CharacterCard from "../components/CharacterCard";

const Container = styled.div`
  padding: 1rem;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  font: inherit;
  border: none;
  outline: none;
  border-bottom: 0.125rem solid ${props => props.theme.accent};
  margin-bottom: 2rem;
  padding: 0.25rem 1rem;
  background-color: ${props => props.theme.bg};
`;

function Home() {
  const { error, loading, data } = useQuery(GET_ALL_CHARACTERS);
  const [search, setSearch] = useState("");

  return (
    <Container>
      <SearchInput
        type="search"
        placeholder="Search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <CardContainer>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Thers is an error</h1>}
        {data &&
          data.getAllCharacters
            .filter(character =>
              character.name.toLowerCase().includes(search.toLocaleLowerCase())
            )
            .map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
      </CardContainer>
    </Container>
  );
}

export default Home;
