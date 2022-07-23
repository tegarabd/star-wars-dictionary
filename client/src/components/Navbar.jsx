import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { FaBars, FaJedi, FaSith, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useThemeHelper } from "../contexts/ThemeHelperProvider";

const Nav = styled.nav`
  position: fixed;
  height: 3rem;
  border-bottom: 0.125rem solid ${props => props.theme.accent};
  width: 100%;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  display: flex;
  justify-content: center;
`;

const InnerNav = styled.nav`
  padding: 0 1rem;
  width: 578px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Title = styled(Link)`
  font-size: larger;
  font-weight: 800;
  color: ${props => props.theme.accent};
  text-decoration: none;
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${props => props.theme.bg};
  width: 60%;
  max-width: 578px;
  padding: 1rem;
`;

const NavRight = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.accent};
  font-weight: bold;
`;

const NavModalContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${props => props.theme.accent};
  cursor: pointer;
`;

const BtnWrapper = styled.div`
  cursor: pointer;
`;

function NavModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <NavModalContainer onClick={onClose}>
      <NavList onClick={e => e.stopPropagation()}>
        <CloseBtnWrapper>
          <FaTimes onClick={onClose} />
        </CloseBtnWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/favorite">Favorite</StyledLink>
      </NavList>
    </NavModalContainer>,
    document.getElementById("portal")
  );
}

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const { currentTheme, toggleCurrentTheme } = useThemeHelper();

  const toggleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  return (
    <Nav>
      <InnerNav>
        <Title to="/">Star Wars Dictionary</Title>
        <NavRight>
          <BtnWrapper onClick={toggleCurrentTheme}>
            {currentTheme === "light" ? <FaJedi /> : <FaSith />}
          </BtnWrapper>
          <BtnWrapper onClick={toggleNavOpen}>
            {navOpen ? <FaTimes /> : <FaBars />}
          </BtnWrapper>
        </NavRight>
        <NavModal isOpen={navOpen} onClose={() => setNavOpen(false)} />
      </InnerNav>
    </Nav>
  );
}

export default Navbar;
