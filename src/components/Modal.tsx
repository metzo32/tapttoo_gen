import ReactDOM from "react-dom";
import s from "../stores/styling";
import useModal from "../hooks/ModalHook";
import { ModalProps } from "../types/ModalProps"; 


const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  modalTitle,
  showCheckbox,
  checkboxText,
}) => {

  const {
    understand,
    animationClosing,
    handleUnderstandChange,
    handleModalClose,
  } = useModal({ isOpen, onClose });


  if (!isOpen) return null;

  const portalElement = document.getElementById("portal");
  if (!portalElement) return null;

  return ReactDOM.createPortal(
    <>
      <s.Modal className={`modal-overlay ${animationClosing ? "closing" : ""}`}>
        <s.Modal
          className={`modal-wrapper ${animationClosing ? "closing" : ""}`}
        >
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
            <s.Modal className="checkbox-container">
              <s.Input
                type="checkbox"
                id="understand"
                checked={understand}
                onChange={handleUnderstandChange}
                className="modal-check"
              />
              <s.Label htmlFor="understand" className="understand">
                {understand ? (
                  <s.CheckboxAfterIcon className="checkbox-icon-checked" />
                ) : (
                  <s.CheckboxBeforeIcon className="checkbox-icon" />
                )}
                {checkboxText}
              </s.Label>
            </s.Modal>
            <s.Button className="Round" onClick={handleModalClose}>
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
