import { DarkButton, Sun, Moon } from "./DarkModeButton.style";
import { useEffect } from "react";
import useThemeContext from "../../hooks/useThemeContext";

const DarkModeButton = () => {
  const { isDark, setIsDark } = useThemeContext();

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDark");
    if (savedTheme) {
      setIsDark(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDark = () => {
    setIsDark((prevMode: boolean) => {
      const newMode = !prevMode;
      localStorage.setItem("isDark", JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <>
      <DarkButton onClick={toggleDark}>
        <DarkButton
          className={`dark-circle ${isDark ? "dark-mode" : "light-mode"}`}
        />
        <Sun className={`${isDark ? "" : "off"}`} />
        <Moon className={`${isDark ? "off" : ""}`} />
      </DarkButton>
    </>
  );
};

export default DarkModeButton;
