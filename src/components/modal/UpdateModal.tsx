import Button from '@/components/button/Button';
import DefaultModal from './DefaultModal';
import { DefaultModalProps } from './types';

const UpdateModal = (props: DefaultModalProps) => {
  return (
    <div>
      <DefaultModal {...props}>
        <input placeholder="유용한 팁" />
        <Button className="modal-button">변경하기</Button>
      </DefaultModal>
    </div>
  );
};

export default UpdateModal;
