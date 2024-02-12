import Button from '@/components/button/Button';
import DefaultModal from './DefaultModal';
import './deleteModal.scss';
import type { DefaultModalProps } from './types';

interface DeleteFolderModalProps extends DefaultModalProps {
  name: string;
}

export function DeleteFolderModal(props: DeleteFolderModalProps) {
  const { name, ...restProps } = props;

  return (
    <DefaultModal className="delete-modal" {...restProps}>
      <div className="delete-modal-title">{name}</div>
      <Button className="modal-button delete-button">삭제하기</Button>
    </DefaultModal>
  );
}

export default DeleteFolderModal;
