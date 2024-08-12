import { useContext } from "react";
import LogoutButton from "../components/Logout";
import { useNavigate } from "react-router-dom";
import s from "../stores/styling";
import Modal from "../components/Modal";
import useModal from "../hooks/ModalHook";
import { AuthContext } from "../context/AuthContext";


export default function Profile() {
  const { currentlyLoggedIn, setCurrentlyLoggedIn } = useContext(AuthContext);
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentlyLoggedIn(false); // 로그아웃 처리
    handleCloseModal(); // 모달 닫기
    navigate("/"); // 로그아웃 후 홈으로 이동
  }

  return (
    <s.ProfileDiv className="wrapper">
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        modalTitle={"잠깐!"}
        showCheckbox={false}
        modalButtonClose={"취소"}
        addButton={true}
        modalButtonOption={"로그아웃"}
        onOptionClick={handleLogout}
      >
        <s.StyledP className="modal">정말 로그아웃 하시겠습니까?</s.StyledP>
      </Modal>

      <LogoutButton handleOpenModal={handleOpenModal} />
    </s.ProfileDiv>
  );
}
