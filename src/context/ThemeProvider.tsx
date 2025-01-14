import { useState, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeContext } from "./ThemeContext";
import { lightTheme, darkTheme } from "../stores/colors";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState<boolean>(true);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
