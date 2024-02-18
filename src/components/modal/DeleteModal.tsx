import { ModalButton } from '@src/components/button/Button';
import DefaultModal from './DefaultModal';
import styles from './deleteModal.module.scss';
import { DefaultModalProps } from './types';

interface DeleteModalProps extends DefaultModalProps {
  title: string;
}

export function DeleteModal(props: DeleteModalProps) {
  const { title, ...restProps } = props;

  return (
    <DefaultModal className={styles['delete-modal']} {...restProps}>
      <div className={styles['delete-modal-title']}>{title}</div>
      <ModalButton className={styles['delete-button']}>삭제하기</ModalButton>
    </DefaultModal>
  );
}

export default DeleteModal;
