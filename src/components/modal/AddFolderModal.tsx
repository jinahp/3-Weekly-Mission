import Button from '@src/components/button/Button';
import DefaultModal from './DefaultModal';

interface AddFolderModalProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const AddFolderModal = ({ isOpen, setOpen }: AddFolderModalProps) => {
  return (
    <DefaultModal
      className="add-folder-modal"
      modalTitle="폴더 추가"
      isOpen={isOpen}
      setOpen={setOpen}
    >
      <input placeholder="내용 입력" />
      <Button className="modal-button">추가하기</Button>
    </DefaultModal>
  );
};

export default AddFolderModal;
