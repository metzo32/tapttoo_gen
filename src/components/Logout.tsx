import s from "../stores/styling";

interface LogoutButtonProps {
  handleOpenModal: () => void;
}

const LogoutButton : React.FC<LogoutButtonProps> = ( {handleOpenModal}) => {

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
