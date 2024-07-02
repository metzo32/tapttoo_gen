import { useState, ReactNode } from "react";
import ReactDOM from "react-dom";
import s from "../stores/styling";
import { ReactComponent as CheckboxBefore } from "../assets/icons/checkbox-passive.svg";
import { ReactComponent as CheckboxAfter } from "../assets/icons/checkbox-active.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [understand, setUnderstand] = useState(false);
  const [checked, setChecked] = useState(false);

  if (!isOpen) return null;

  const handleUnderstandChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUnderstand((prevUnderstand) => !prevUnderstand);
  };

  const handleModalClose = () => {
    if (understand) {
      onClose(); // Ensure the onClose callback is called when the modal is closed
    }
  };

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  const portalElement = document.getElementById("portal");
  if (!portalElement) return null;

  return ReactDOM.createPortal(
    <>
      <s.Modal className="modal-overlay">
        <s.Modal className="modal-wrapper">
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
            <s.StyledH1 className="warning">잠깐!</s.StyledH1>
            <s.Modal className="text-box">{children}</s.Modal>
            <s.Modal className="checkbox-container">
              <s.Input
                type="checkbox"
                id="understand"
                checked={understand}
                onChange={handleUnderstandChange}
                className="modal-check"
              />
              <s.Label
                htmlFor="understand"
                className="understand"
                onClick={handleClick}
              >
                {checked 
                  ? (
                  <CheckboxAfter className="checkbox-icon-checked" />
                ) : (
                  <CheckboxBefore className="checkbox-icon" />
                )}
                이해했습니다.
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
