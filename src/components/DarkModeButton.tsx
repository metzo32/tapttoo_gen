
import s from "../stores/styling";
import { useEffect } from "react";
import useThemeContext from "../hooks/ThemeHook";

const DarkModeButton: React.FC = () => {

  const { isDark, setIsDark } = useThemeContext();

  useEffect(() => {
    const savedTheme = localStorage.getItem('isDark')
    if (savedTheme) {
      setIsDark(JSON.parse(savedTheme))
    }
    }, [])

    const toggleDark = () => {
      setIsDark((prevMode: boolean) => {
        const newMode = !prevMode;
        localStorage.setItem('isDark', JSON.stringify(newMode));
        return newMode;
      });
    };

  return (
    <s.Button
      className="Round"
      onClick={toggleDark}
    >
      다크
    </s.Button>
  );
};

export default DarkModeButton;
