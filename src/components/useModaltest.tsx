// src/useModal.ts
import { useState, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: ReactNode;
}

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const Modal = ({ children }: ModalProps) => {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
      <div style={modalStyles.overlay}>
        <div style={modalStyles.content}>
          <button onClick={closeModal}>Close</button>
          {children}
        </div>
      </div>,
      document.body
    );
  };

  return { isOpen, openModal, closeModal, Modal };
}

const modalStyles = {
  overlay: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    background: 'white',
    padding: '20px',
    borderRadius: '4px',
  },
};

export default useModal;
