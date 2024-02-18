import btnClose from '@src/img/btn-close.svg';
import clsx from 'clsx';
import styles from './modal.module.scss';
import { DefaultModalProps } from './types';
import Image from 'next/image';

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
      <div className={styles.backdrop} onClick={handleBackClick}>
        <div className={clsx(styles['modal-wrapper'], className)}>
          <div className={styles.modal}>
            <div className={styles.title}>{modalTitle}</div>
            {children}
          </div>
          <Image
            className={styles['btn-close']}
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
