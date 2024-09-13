// 상태, theme 두가지를 합친 provider

import React, { useState, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeContext } from "./ThemeContext";
import { lightTheme, darkTheme } from "../stores/colors";

interface CustomThemeProviderProps {
  children: ReactNode;
}

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
