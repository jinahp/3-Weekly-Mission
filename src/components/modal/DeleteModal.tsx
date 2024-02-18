import Button from '@src/components/button/Button';
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
      <Button className={styles['modal-button delete-button']}>삭제하기</Button>
    </DefaultModal>
  );
}

export default DeleteModal;
