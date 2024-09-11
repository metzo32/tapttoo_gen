import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import s from "../stores/styling";
import useModal from "../hooks/ModalHook";
import Modal from "../components/Modal";

interface LogoutButtonProps {
  className?: string;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({
  className,
}) => {
  const { setCurrentlyLoggedIn } = useContext(AuthContext);
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentlyLoggedIn(false); // 로그아웃 처리
    handleCloseModal(); // 모달 닫기
    navigate("/"); // 로그아웃 후 홈으로 이동
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        modalTitle={"잠깐!"}
        showCheckbox={false}
        text={
          <s.StyledP className="modal-text">
            정말 로그아웃 하시겠습니까?
          </s.StyledP>
        }
        modalButtonClose={"취소"}
        addButton={true}
        modalButtonOption={"로그아웃"}
        onOptionClick={handleLogout}
      />

      <s.OutIcon onClick={handleOpenModal} />
    </>
  );
};

export default LogoutButton;
