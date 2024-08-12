import s from "../stores/styling";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import useModal from "../hooks/ModalHook";
import Modal from "../components/Modal";
import LogoutButton from "../components/Logout";
import CurrentUserData from "../stores/CurrentUserData";

export default function Profile() {
  const { currentlyLoggedIn, setCurrentlyLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState<any>(null);
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentlyLoggedIn(false); // 로그아웃 처리
    handleCloseModal(); // 모달 닫기
    navigate("/"); // 로그아웃 후 홈으로 이동
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        console.log("Done!");
        if (userDoc.exists()) {
          setUserData(userDoc.data());
          console.log(userDoc.data())
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchUserData();
  }, []);



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

      <s.ProfileDiv>
        {userData ? <CurrentUserData userData={userData} /> : <p>Loading...</p>}
      </s.ProfileDiv>

      <LogoutButton handleOpenModal={handleOpenModal} />
    </s.ProfileDiv>
  );
}
