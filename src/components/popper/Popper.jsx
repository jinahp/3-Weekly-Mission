import { useClick, useFloating, useInteractions } from '@floating-ui/react';
import icKebab from 'img/ic-kebab.svg';
import { useState } from 'react';
import './popper.scss';
import DeleteModal from 'components/modal/DeleteModal';
import AddModal from 'components/modal/AddModal';

function Popper(props) {
  const [isOpen, setOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setOpen,
    strategy: 'fixed',
  });

  const click = useClick(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click]);

  const onClick = (e) => {
    e.preventDefault();
    setOpen(!isOpen);
  };

  const handleDelete = () => {
    setDeleteModalOpen(true);
  };

  const handleAddLink = () => {
    setAddModalOpen(true);
  };

  return (
    <>
      <img
        src={icKebab}
        alt="kebab"
        className="card-kebab"
        ref={refs.setReference}
        {...getReferenceProps({ onClick })}
      />
      {isOpen && (
        <div
          ref={refs.setFloating}
          className={`popper ${isOpen ? 'active' : ''}`} // isOpen 상태에 따라 active 클래스 추가
          {...getFloatingProps({ onClick })}
        >
          <div className="popper-menu pooper-delete" onClick={handleDelete}>
            삭제하기
          </div>
          <div className="popper-menu popper-add" onClick={handleAddLink}>
            폴더에 추가
          </div>
        </div>
      )}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        modalTitle="링크 삭제"
        title={props.linkTitle}
        setOpen={setDeleteModalOpen}
      />
      <AddModal
        isOpen={isAddModalOpen}
        modalTitle="폴더에 추가"
        setOpen={setAddModalOpen}
        title={props.linkTitle}
      />
    </>
  );
}

export default Popper;
