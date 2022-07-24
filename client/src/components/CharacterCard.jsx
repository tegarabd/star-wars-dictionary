import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${props => props.theme.bg};
  border: 0.125rem solid ${props => props.theme.accent};
  width: 10rem;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  object-position: top;
`;

const CardText = styled.div`
  padding: 1rem;
`;

const CardTopText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Affiliation = styled.p`
  color: ${props => props.theme.accent};
  font-weight: bold;
`;

const FavoriteButton = styled.button`
  font: inherit;
  background-color: inherit;
  color: inherit;
  border: none;
  outline: none;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

function CharacterCard({ character, isFavorite, handleToggleFavorite }) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/characters/${character.id}`)}>
      <CardImg
        src={character.image}
        onError={() => (this.img.src = "default.img")}
      />
      <CardText>
        <CardTopText>
          <h3>{character.name}</h3>
          <FavoriteButton
            onClick={e => {
              e.stopPropagation();
              handleToggleFavorite(character);
            }}
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </FavoriteButton>
        </CardTopText>
        <Affiliation>{character.affiliations[0]}</Affiliation>
        <p>{character.cybernetics}</p>
        <p>{character.homeworld}</p>
      </CardText>
    </Card>
  );
}

export default CharacterCard;
