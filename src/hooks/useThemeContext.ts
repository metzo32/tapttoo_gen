import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";

const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Theme Context is not provided");
  }

  return context;
};

export default useThemeContext;
