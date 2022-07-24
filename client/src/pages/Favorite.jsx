import React from "react";
import styled from "styled-components";
import CardContainer from "../components/CardContainer";
import CharacterCard from "../components/CharacterCard";
import useLocalStorage from "../hooks/useLocalStorage";

const Container = styled.div`
  padding: 1rem;
`;

function Favorite() {
  const [favorite, setFavorite] = useLocalStorage("favorite", []);
  const handleToggleFavorite = character => {
    const isFavorite = favorite.find(fav => fav.id === character.id);
    if (isFavorite) {
      setFavorite(favorite.filter(fav => fav.id !== character.id));
    } else {
      setFavorite([...favorite, character]);
    }
  };

  return (
    <Container>
      <CardContainer>
        {favorite.map(character => (
          <CharacterCard
            key={character.id}
            character={character}
            isFavorite={favorite.find(fav => fav.id === character.id)}
            handleToggleFavorite={() => handleToggleFavorite(character)}
          />
        ))}
      </CardContainer>
    </Container>
  );
}

export default Favorite;
