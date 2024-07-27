
import s from "../stores/styling";
import useThemeContext from "../hooks/ThemeHook";

const DarkModeButton: React.FC = () => {

  const { isDark, setIsDark } = useThemeContext();

  const toggleDark = () => {
    setIsDark((prevMode: boolean) => !prevMode);
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
