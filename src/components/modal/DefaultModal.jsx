import clsx from 'clsx';
import btnClose from 'img/btn-close.svg';
import PropTypes from 'prop-types';
import './modal.scss';

export function DefaultModal(props) {
  const { children, className, isOpen, modalTitle, setOpen } = props;

  const closeModal = () => {
    setOpen?.(false);
  };

  const handleBackClick = (e) => {
    e.preventDefault();
  };

  return (
    isOpen && (
      <div className="backdrop" onClick={handleBackClick}>
        <div className={clsx('modal-wrapper', className)}>
          <div className="modal">
            <div className="title">{modalTitle}</div>
            {children}
          </div>
          <img
            className="btn-close"
            onClick={closeModal}
            src={btnClose}
            alt="close button"
          />
        </div>
      </div>
    )
  );
}

DefaultModal.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default DefaultModal;
