import s from "../stores/styling";
import { useEffect } from "react";
import useThemeContext from "../hooks/ThemeHook";

const DarkModeButton: React.FC = () => {
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
      <s.DarkButton onClick={toggleDark}>
        <s.DarkButton className={`dark-circle ${isDark ? "dark-mode" : "light-mode"}`}/>
        <s.Sun />
        <s.Moon />
      </s.DarkButton>
    </>
  );
};

export default DarkModeButton;