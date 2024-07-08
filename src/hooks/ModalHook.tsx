import { useState } from "react";
import { UseModalProps } from "../types/ModalProps";


const useModal = ({ isOpen, onClose }: UseModalProps) => {
  const [understand, setUnderstand] = useState(false);
  const [animationClosing, setAnimationClosing] = useState(false);

  const handleUnderstandChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUnderstand((prevUnderstand) => !prevUnderstand);
  };

  const handleModalClose = () => {
    if (understand) {
      setAnimationClosing(true);
      setTimeout(() => {
        setAnimationClosing(false);
        onClose(); 
      }, 800);
    }
  };

  return {
    isOpen,
    onClose,
    understand,
    animationClosing,
    handleUnderstandChange,
    handleModalClose,
  };
};

export default useModal;