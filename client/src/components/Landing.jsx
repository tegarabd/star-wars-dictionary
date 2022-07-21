import React from "react";
import { useTheme } from "styled-components";
import { ReactComponent as StarWarsLogo } from "../star-wars.svg";

function Landing() {
  const theme = useTheme();

  return (
    <div>
      <StarWarsLogo width="100%" fill={theme.accent} />
    </div>
  );
}

export default Landing;
