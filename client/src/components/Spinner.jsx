import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0) }
 100% { transform: rotate(360deg) }
`;

const Spinner = styled.div`
  min-width: 20rem;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 2rem solid ${props => props.theme.accent};
  border-right-color: transparent;
  border-left-color: transparent;
  margin: auto;
  animation: ${spinAnimation} 1.2s linear infinite;
`;

export default Spinner;
