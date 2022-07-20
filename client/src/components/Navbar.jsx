import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaJedi, FaSith, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useThemeHelper } from "../contexts/ThemeHelperProvider";

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 3rem;
  padding: 0 1rem;
  border-bottom: 0.125rem solid ${props => props.theme.accent};
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.bg};
`;

const Title = styled(Link)`
  font-size: larger;
  font-weight: 800;
  color: ${props => props.theme.accent};
  text-decoration: none;
`;

const NavList = styled.nav`
  position: absolute;
  top: 3rem;
  right: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${props => props.theme.bg};
  border: 0.125rem solid ${props => props.theme.accent};
  border-top: none;
  width: 40%;
`;

const NavRight = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.fg};
`;

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const { theme, currentTheme, toggleCurrentTheme } = useThemeHelper();

  const toggleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  return (
    <Nav>
      <Title to="/">Star Wars Dictionary</Title>
      <NavRight>
        <div onClick={toggleCurrentTheme}>
          {currentTheme === theme.light ? <FaJedi /> : <FaSith />}
        </div>
        <div onClick={toggleNavOpen}>{navOpen ? <FaTimes /> : <FaBars />}</div>
      </NavRight>
      {navOpen && (
        <NavList>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/favorite">Favorite</StyledLink>
        </NavList>
      )}
    </Nav>
  );
}

export default Navbar;
