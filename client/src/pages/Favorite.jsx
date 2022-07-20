import React from "react";
import styled from "styled-components";
import CharacterCard from "../components/CharacterCard";
import useLocalStorage from "../hooks/useLocalStorage";

const Container = styled.div`
  padding: 1rem;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

function Favorite() {
  const [favorite] = useLocalStorage("favorite", []);

  return (
    <Container>
      <CardContainer>
        {favorite.map(fav => (
          <CharacterCard key={fav.id} character={fav} />
        ))}
      </CardContainer>
    </Container>
  );
}

export default Favorite;
