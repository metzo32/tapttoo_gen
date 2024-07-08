// src/types/ModalProps.ts
import { ReactNode } from "react";

interface CommonProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ModalProps extends CommonProps {
  children?: ReactNode;
  modalTitle?: string;
  showCheckbox?: boolean;
  checkboxText?: string;
}

export interface UseModalProps extends CommonProps {}
