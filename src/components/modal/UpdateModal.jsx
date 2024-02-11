import Button from 'components/button/Button';
import DefaultModal from './DefaultModal';

export function UpdateModal(props) {
  return (
    <div>
      <DefaultModal {...props}>
        <input placeholder="유용한 팁" />
        <Button className="modal-button">변경하기</Button>
      </DefaultModal>
    </div>
  );
}

UpdateModal.propTypes = {
  ...DefaultModal.propTypes,
};

export default UpdateModal;
