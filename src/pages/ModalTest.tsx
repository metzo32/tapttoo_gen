// src/ModalPage.tsx
import React from 'react';
import useModal from '../components/useModaltest';

const ModalPage: React.FC = () => {
  const { openModal, Modal } = useModal();

  return (
    <div>
      <h1>Modal Page</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal>
        <h2>Modal Content</h2>
        <p>This is a modal window.</p>
      </Modal>
    </div>
  );
}

export default ModalPage;
