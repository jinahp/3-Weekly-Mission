import { useClick, useFloating, useInteractions } from '@floating-ui/react';
import AddModal from '@src/components/modal/AddModal';
import DeleteModal from '@src/components/modal/DeleteModal';
import icKebab from '@src/img/ic-kebab.svg';
import clsx from 'clsx';
import Image from 'next/image';
import { useRef, useState } from 'react';
import styles from './popper.module.scss';

interface PopperProps {
  linkTitle: string;
}

const Popper = (props: PopperProps) => {
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

  const onClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
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
      <Image
        src={icKebab}
        alt="kebab"
        className={styles['card-kebab']}
        ref={(node) => refs.setReference(node)}
        {...getReferenceProps({ onClick })}
      />
      {isOpen && (
        <div
          ref={refs.setFloating}
          className={`${styles.popper} ${isOpen ? styles.active : ''}`} // isOpen 상태에 따라 active 클래스 추가
          {...getFloatingProps({ onClick })}
        >
          <div
            className={clsx(styles['popper-menu'], styles['pooper-delete'])}
            onClick={handleDelete}
          >
            삭제하기
          </div>
          <div
            className={clsx(styles['popper-menu'], styles['popper-add'])}
            onClick={handleAddLink}
          >
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
};

export default Popper;
