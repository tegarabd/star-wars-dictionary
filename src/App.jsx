import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ThemeHelperProvider from "./contexts/ThemeHelperProvider";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Detail from "./pages/Detail";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.bg};
`;

const Container = styled.div`
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  min-height: 100vh;
  max-width: 578px;
`;

const Content = styled.div`
  padding-top: 3rem;
`;

function App() {
  return (
    <ThemeHelperProvider>
      <Navbar />
      <Wrapper>
        <Container>
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/characters/:characterId" element={<Detail />} />
            </Routes>
          </Content>
        </Container>
      </Wrapper>
    </ThemeHelperProvider>
  );
}

export default App;
