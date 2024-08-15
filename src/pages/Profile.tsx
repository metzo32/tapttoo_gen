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
  const [daysPassed, setDaysPassed] = useState<number | null>(null);
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const [modalMessage, setModalMessage] = useState<React.ReactNode>(""); // 모달에 표시될 메시지 상태
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
          console.log(userDoc.data());
        } else {
          console.log("No such document!");
        }
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchSignupDate = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            const signupDate = userDoc.data().signupDate.toDate();
            const currentDate = new Date();
            const timeDifference = currentDate.getTime() - signupDate.getTime();
            const daysPassed =
              Math.floor(timeDifference / (1000 * 3600 * 24)) + 1; // 첫날을 1일로
            setDaysPassed(daysPassed);
          }
        }
      } catch (error) {
        console.error("가입 날짜를 가져오는 중 오류 발생:", error);
      }
    };

    fetchSignupDate();
  }, []);

  return (
    <s.ProfileDiv className="wrapper">
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        modalTitle={"잠깐!"}
        showCheckbox={false}
        text={
          <>
          <s.StyledP className="modal-text">
            정말 로그아웃 하시겠습니까?
          </s.StyledP>
          </>
        }
        modalButtonClose={"취소"}
        addButton={true}
        modalButtonOption={"로그아웃"}
        onOptionClick={handleLogout}
      />

      <s.ProfileDiv>
        {userData ? <CurrentUserData userData={userData} /> : <p>Loading...</p>}
      </s.ProfileDiv>

      <LogoutButton handleOpenModal={handleOpenModal} />
    </s.ProfileDiv>
  );
}
