import Button from 'components/button/Button';
import DefaultModal from './DefaultModal';
import './deleteModal.scss';

export function DeleteModal(props) {
  return (
    <DefaultModal className="delete-modal" {...props}>
      <div className="delete-modal-title">{props.title}</div>
      <Button className="modal-button delete-button">삭제하기</Button>
    </DefaultModal>
  );
}

DeleteModal.propTypes = {
  ...DefaultModal.propTypes,
};

export default DeleteModal;
