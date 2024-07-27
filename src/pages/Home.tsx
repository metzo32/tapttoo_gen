import { useContext, useState } from "react";
import s from "../stores/styling";
import useThemeContext from "../hooks/ThemeHook";
import LoadingScreen from "../components/LoadingScreen";
import MainPageImage01 from "../assets/images/main_page_png01_low.png";
import MainPageImage02 from "../assets/images/main_page_png02_low.png";
import Modal from "../components/Modal";
import useModal from "../hooks/ModalHook";

const TestPage = () => {
  const { isDark } = useThemeContext();

  const [loading, setLoading] = useState(true);
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <LoadingScreen onLoadComplete={handleLoadingComplete} />
      ) : (
        <s.Home className="home-wrapper">
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            modalTitle={"잠깐!"}
            showCheckbox={true}
            checkboxText={"이해했습니다."}
          >
            <s.StyledP className="modal">
              19세 미만 회원의 경우,
              <br />
              예약 및 시술이 제한될 수 있습니다.
            </s.StyledP>
          </Modal>
          <s.Button className="Round" onClick={handleOpenModal}>
            모달
          </s.Button>
          <s.Home className="image-wrapper">
            <s.HomeImage
              className="LayeredImage01"
              src={MainPageImage01}
              alt="photo"
            />

            <s.Mask className="mask-wrapper">
              <s.Mask className="mask-container">
                <s.MaskText>Tapttoo</s.MaskText>
              </s.Mask>

              <s.Mask className="circle-mask" aria-hidden="true" data-hero>
                <s.MaskText className="masked">Tapttoo</s.MaskText>
              </s.Mask>
            </s.Mask>
            <s.HomeImage
              className="LayeredImage02"
              src={MainPageImage02}
              alt="photo"
            />
          </s.Home>
        </s.Home>
      )}
    </>
  );
};

export default TestPage;
