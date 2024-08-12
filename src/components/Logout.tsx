import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import s from "../stores/styling";

interface LogoutButtonProps {
  handleOpenModal: () => void;
}

const LogoutButton : React.FC<LogoutButtonProps> = ( {handleOpenModal}) => {
  const navigate = useNavigate();
  const { currentlyLoggedIn, setCurrentlyLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    handleOpenModal()
  };

  return (
    <s.Button className="Round" onClick={handleLogout}>
      Logout
    </s.Button> // 로그아웃 버튼
  );
};

export default LogoutButton;
