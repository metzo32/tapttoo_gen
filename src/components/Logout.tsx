import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if(window.confirm("Are you sure you want to sign out?")) {
    logout(); 
    navigate('/login');
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>  // 로그아웃 버튼
  );
};

export default LogoutButton;
