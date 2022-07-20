import React from "react";
import { FaExternalLinkAlt, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";

const Card = styled.div`
  background-color: ${props => props.theme.bg};
  border: 0.125rem solid ${props => props.theme.accent};
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
`;

const Name = styled(Link)`
  color: ${props => props.theme.fg};
  text-decoration: none;
  margin-bottom: 0.5rem;
`;

function CharacterCard({ character }) {
  const [favorite, setFavorite] = useLocalStorage("favorite", []);
  const isfavorite = favorite.find(fav => fav.id === character.id);
  const handleToggleFavorite = () => {
    if (isfavorite) {
      setFavorite(favorite.filter(fav => fav.id !== character.id));
    } else {
      setFavorite([...favorite, character]);
    }
  };

  return (
    <Card>
      <CardImg src={character.image} />
      <CardText>
        <CardTopText>
          <Name to={`/characters/${character.id}`}>
            <h3>{character.name}</h3>
            <FaExternalLinkAlt />
          </Name>
          <FavoriteButton onClick={handleToggleFavorite}>
            {isfavorite ? <FaHeart /> : <FaRegHeart />}
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
