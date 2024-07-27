import { useState, useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";
import s from "../stores/styling";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
  children: ReactNode;
  showCheckbox?: boolean;
  checkboxText?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, modalTitle, children, showCheckbox, checkboxText }) => {
  
  const [understand, setUnderstand] = useState(false);	
  //체크박스 체크 여부 저장
  const [animationClosing, setAnimationClosing] = useState(false);	
  //닫히는 애니메이션울 클래스 추가하는 방식으로 조건부 렌더링
  const [isInvalid, setIsInvalid] = useState(false);

  if (!isOpen) return null;

  const handleUnderstandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnderstand((prevUnderstand) => !prevUnderstand);	//보통 prev라고 쓰지만, 알아보기 쉽게 바꾸어 썼다.
    setIsInvalid(false)
  };

  const handleModalClose = () => {
    if (!showCheckbox || understand) { // 체크박스가 없는 포맷이거나 understand에 체크가 돼있을 때
      setAnimationClosing(true)	// 모달 닫음으로 처리
      setTimeout(() => {
        setAnimationClosing(false);
        setIsInvalid(false);
        onClose();
      }, 800)	//애니메이션 duration과 같게 쓴다.
    } else {
      setIsInvalid(true);
    }
  };

  const portalElement = document.getElementById("portal");
  if (!portalElement) return null; 


  
  return ReactDOM.createPortal(
    <>
      <s.Modal className={`modal-overlay ${animationClosing ? "closing" : ""}`}>
        <s.Modal className={`modal-wrapper ${animationClosing ? "closing" : ""}`}>
          <s.Modal className="circle">
            <s.WarnIcon />
          </s.Modal>
          <s.Echo className="wrapper">
            <s.Echo className="circle00" />
            <s.Echo className="circle01" />
            <s.Echo className="circle02" />
            <s.Echo className="circle03" />
          </s.Echo>
          <s.Modal className="modal-container">
            <s.StyledH1 className="warning">{modalTitle}</s.StyledH1>
            <s.Modal className="text-box">{children}</s.Modal>
            {showCheckbox && <s.Modal className="checkbox-container">
              <s.Input
                type="checkbox"
                id="understand"
                checked={understand}
                onChange={handleUnderstandChange}
                className="modal-check"
              />
              <s.Label
                htmlFor="understand"
                className={`modal-label ${isInvalid ? "invalid" : ""}`}
              >
                {understand ? (
                  <s.CheckboxAfterIcon className="checkbox-icon-checked" />
                ) : (
                  <s.CheckboxBeforeIcon className="checkbox-icon" />
                )}
                {checkboxText}
              </s.Label>
            </s.Modal>}
            <s.Button className="Round modal" onClick={handleModalClose}>
              닫기
            </s.Button>
          </s.Modal>
        </s.Modal>
      </s.Modal>
    </>,
    portalElement
  );
};

export default Modal;