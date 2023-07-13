import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import GET_ALL_CHARACTERS from "../graphql/getAllCharacters";
import styled from "styled-components";
import CharacterCard from "../components/CharacterCard";
import useLocalStorage from "../hooks/useLocalStorage";
import Landing from "../components/Landing";
import CardContainer from "../components/CardContainer";
import Spinner from "../components/Spinner";

const Container = styled.div`
  padding: 1rem;
  width: 100%;
  padding-top: 0;
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
  color: ${props => props.theme.fg};
`;

const SearchWrapper = styled.div`
  padding-top: 1rem;
  position: sticky;
  top: 3rem;
  background-color: ${props => props.theme.bg};
`;

function CharacterList({ search }) {
  const { error, loading, data } = useQuery(GET_ALL_CHARACTERS);
  const [favorite, setFavorite] = useLocalStorage("favorite", []);
  const handleToggleFavorite = character => {
    const isFavorite = favorite.find(fav => fav.id === character.id);
    if (isFavorite) {
      setFavorite(favorite.filter(fav => fav.id !== character.id));
    } else {
      setFavorite([...favorite, character]);
    }
  };

  if (error) {
    return <h1>There is an error</h1>;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <CardContainer>
      {data &&
        data.characters
          .filter(character =>
            character.name.toLowerCase().includes(search.toLocaleLowerCase())
          )
          .map(character => (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={favorite.find(fav => fav.id === character.id)}
              handleToggleFavorite={() => handleToggleFavorite(character)}
            />
          ))}
    </CardContainer>
  );
}

function Home() {
  const [search, setSearch] = useState("");

  return (
    <Container>
      {search === "" && <Landing />}
      <SearchWrapper>
        <SearchInput
          type="search"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </SearchWrapper>
      <CharacterList search={search} />
    </Container>
  );
}

export default Home;
