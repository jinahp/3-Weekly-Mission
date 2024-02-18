import Button from '@src/components/button/Button';
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
      <Button
        className={`${styles['modal-button']} ${styles['delete-button']}`}
      >
        삭제하기
      </Button>
    </DefaultModal>
  );
}

export default DeleteFolderModal;
