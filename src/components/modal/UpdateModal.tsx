import { ModalButton } from '@src/components/button/Button';
import DefaultModal from './DefaultModal';
import { DefaultModalProps } from './types';

const UpdateModal = (props: DefaultModalProps) => {
  return (
    <DefaultModal {...props}>
      <input placeholder="유용한 팁" />
      <ModalButton>변경하기</ModalButton>
    </DefaultModal>
  );
};

export default UpdateModal;
