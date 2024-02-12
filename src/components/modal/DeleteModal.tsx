import Button from '@/components/button/Button';
import DefaultModal from './DefaultModal';
import './deleteModal.scss';
import { DefaultModalProps } from './types';

interface DeleteModalProps extends DefaultModalProps {
  title: string;
}

export function DeleteModal(props: DeleteModalProps) {
  const { title, ...restProps } = props;

  return (
    <DefaultModal className="delete-modal" {...restProps}>
      <div className="delete-modal-title">{title}</div>
      <Button className="modal-button delete-button">삭제하기</Button>
    </DefaultModal>
  );
}

export default DeleteModal;
