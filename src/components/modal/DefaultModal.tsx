import btnClose from '@/img/btn-close.svg';
import clsx from 'clsx';
import './modal.scss';
import { DefaultModalProps } from './types';

export function DefaultModal(props: DefaultModalProps) {
  const { children, className, isOpen, modalTitle, setOpen } = props;

  const closeModal = () => {
    setOpen?.(false);
  };

  const handleBackClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    isOpen && (
      <div className="backdrop" onClick={handleBackClick}>
        <div className={clsx('modal-wrapper', className)}>
          <div className="modal">
            <div className="title">{modalTitle}</div>
            {children}
          </div>
          <img
            className="btn-close"
            onClick={closeModal}
            src={btnClose}
            alt="close button"
          />
        </div>
      </div>
    )
  );
}

export default DefaultModal;
