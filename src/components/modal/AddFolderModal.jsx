import Button from 'components/button/Button';
import DefaultModal from './DefaultModal';

export function AddFolderModal(props) {
  return (
    <DefaultModal
      className="add-folder-modal"
      modalTitle="폴더 추가"
      {...props}
    >
      <input placeholder="내용 입력" />
      <Button className="modal-button">추가하기</Button>
    </DefaultModal>
  );
}

export default AddFolderModal;
