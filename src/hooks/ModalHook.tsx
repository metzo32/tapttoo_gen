import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [understand, setUnderstand] = useState(false);
  const [closing, setClosing] = useState(false);

  //   if (!isOpen) return null; 조건부 호출은 커스텀 훅에서 사용할 수 없음

  const openModal = () => setIsOpen(true);

  const toggleUnderstand = () => {
      console.log(understand)
    setUnderstand((prev) => !prev);
    }

  const closeModal = () => {
    if (!understand) {
      return;
    }
    setClosing(true);

    setTimeout(() => {
      setClosing(false);
      setIsOpen(false);
    }, 800);
  };

  return {
    isOpen,
    understand,
    closing,
    openModal,
    closeModal,
    toggleUnderstand,
  };
};

export default useModal;
