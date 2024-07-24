import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import s from '../stores/styling';

const LogoutButton = () => {
  const navigate = useNavigate();
  const { currentlyLoggedIn, setCurrentlyLoggedIn } = useContext(AuthContext)

  const handleLogout = () => {
    if(window.confirm("Are you sure you want to sign out?")) {
    navigate('/login');
    setCurrentlyLoggedIn(false)
    }
  };

  return (
    <s.Button className="Round" onClick={handleLogout}>Logout</s.Button>  // 로그아웃 버튼
  );
};

export default LogoutButton;
