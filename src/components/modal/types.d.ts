import type { ReactNode } from 'react';

interface DefaultModalProps {
  isOpen: boolean;
  setOpen?: (isOpen: boolean) => void;
  className?: string;
  modalTitle: string;
  children?: ReactNode;
}
