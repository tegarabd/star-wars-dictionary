import React, { createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";

const theme = {
  light: {
    bg: "#e8e8e8",
    fg: "#212121",
    accent: "#0085ff",
  },
  dark: {
    bg: "#212121",
    fg: "#e8e8e8",
    accent: "#e84f4f",
  },
};

const ThemeHelper = createContext();

function ThemeHelperProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme", theme.light);

  const toggleCurrentTheme = () => {
    setCurrentTheme(currentTheme === theme.light ? theme.dark : theme.light);
    setCurrentTheme(currentTheme === theme.light ? theme.dark : theme.light);
  };

  const value = { theme, currentTheme, toggleCurrentTheme };

  return (
    <ThemeHelper.Provider value={value}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeHelper.Provider>
  );
}

export default ThemeHelperProvider;

export const useThemeHelper = () => {
  return useContext(ThemeHelper);
};
