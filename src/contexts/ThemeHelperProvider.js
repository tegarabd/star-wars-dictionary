import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";

const theme = {
  light: {
    bg: "#e8e8e8",
    fg: "#212121",
    accent: "#0085ff",
    accentR: 0,
    accentG: 133,
    accentB: 255,
  },
  dark: {
    bg: "#212121",
    fg: "#e8e8e8",
    accent: "#e84f4f",
    accentR: 232,
    accentG: 79,
    accentB: 79,
  },
};

const ThemeHelper = createContext();

function ThemeHelperProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme", "light");
  const [currentThemeConfig, setCurrentThemeConfig] = useState(
    currentTheme === "light" ? theme.light : theme.dark
  );

  const toggleCurrentTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
      setCurrentThemeConfig(theme.dark);
    } else if (currentTheme === "dark") {
      setCurrentTheme("light");
      setCurrentThemeConfig(theme.light);
    } else {
      setCurrentTheme("dark");
      setCurrentThemeConfig(theme.dark);
    }
  };

  const value = { currentTheme, toggleCurrentTheme };

  return (
    <ThemeHelper.Provider value={value}>
      <ThemeProvider theme={currentThemeConfig}>{children}</ThemeProvider>
    </ThemeHelper.Provider>
  );
}

export default ThemeHelperProvider;

export const useThemeHelper = () => {
  return useContext(ThemeHelper);
};
