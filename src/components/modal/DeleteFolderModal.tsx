import { ModalButton } from '../button/Button';
import DefaultModal from './DefaultModal';
import styles from './deleteModal.module.scss';
import type { DefaultModalProps } from './types';

interface DeleteFolderModalProps extends DefaultModalProps {
  name: string;
}

export function DeleteFolderModal(props: DeleteFolderModalProps) {
  const { name, ...restProps } = props;

  return (
    <DefaultModal className={styles['delete-modal']} {...restProps}>
      <div className={styles['delete-modal-title']}>{name}</div>
      <ModalButton className={styles['delete-button']}>삭제하기</ModalButton>
    </DefaultModal>
  );
}

export default DeleteFolderModal;
