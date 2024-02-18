import Button from '@src/components/button/Button';
import DefaultModal from './DefaultModal';
import { DefaultModalProps } from './types';
import styles from './modal.module.scss';

const UpdateModal = (props: DefaultModalProps) => {
  return (
    <div>
      <DefaultModal {...props}>
        <input placeholder="유용한 팁" />
        <Button className={styles['modal-button']}>변경하기</Button>
      </DefaultModal>
    </div>
  );
};

export default UpdateModal;
