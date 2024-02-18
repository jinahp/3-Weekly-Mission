import { useState } from 'react';
import { FOLDER_DATA_LIST } from '@src/apis';
import AddFolderModal from '@src/components/modal/AddFolderModal';
import ShareModal from '@src/components/modal/ShareModal';
import UpdateModal from '@src/components/modal/UpdateModal';
import DeleteFolderModal from '@src/components/modal/DeleteFolderModal';
import useQuery from '@src/hooks/useQuery';
import icAddWhite from '@src/img/ic-add-w.svg';
import icAdd from '@src/img/ic-add.svg';
import icDelete from '@src/img/ic-delete.svg';
import icEdit from '@src/img/ic-edit.svg';
import icShare from '@src/img/ic-share.svg';
import styles from './folderListButton.module.scss';
import Image from 'next/image';

interface Folder {
  id: number;
  name: string;
  description: string;
}

interface Props {
  selectedFolder: Folder | null;
  setSelectedFolder: (folder: Folder | null) => void;
}

const FolderListButton = ({ selectedFolder, setSelectedFolder }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const {
    data: { data: folders },
  } = useQuery<{ data: Folder[] }>(FOLDER_DATA_LIST, {
    data: [],
  });

  const handleShowAllLinks = () => {
    setSelectedFolder(null);
  };

  const handleFolderClick = (folder: Folder) => {
    setSelectedFolder(folder);
  };

  const handleShareOpen = () => {
    setShareModalOpen(true);
  };

  const handleUpdateOpen = () => {
    setUpdateModalOpen(true);
  };

  const handleDeleteOpen = () => {
    setDeleteModalOpen(true);
  };

  return (
    <>
      <div className={styles['folder-list-button-wrapper']}>
        <div
          className={styles['folder-list-button']}
          onClick={handleShowAllLinks}
        >
          전체
        </div>
        {folders.map((folder) => (
          <div
            key={folder.id}
            className={`${styles['folder-list-button']} ${
              selectedFolder === folder ? styles.active : ''
            }`}
            onClick={() => handleFolderClick(folder)}
          >
            {folder.name}
          </div>
        ))}
        <div className={styles['folder-list-button-ic-add-wrapper']}>
          <span className={styles['folder-list-button-mobile-text']}>
            폴더추가
          </span>
          <Image
            width={100}
            height={100}
            src={icAdd}
            alt="add"
            className={styles['folder-list-button-add']}
            onClick={() => setOpen(true)}
          />
          <AddFolderModal isOpen={isOpen} setOpen={setOpen} />
          <Image
            width={100}
            height={100}
            src={icAddWhite}
            alt="add"
            className={styles['folder-list-button-add-white']}
          />
        </div>
      </div>
      <div className={styles['folder-list-button-box']}>
        <div className={styles['folder-list-button-title-wrapper']}>
          <div className={styles['folder-list-button-title']}>
            {selectedFolder?.name || '전체'}
          </div>
        </div>
        {selectedFolder && (
          <div className={styles['folder-list-button-icons-wrapper']}>
            <Image
              width={100}
              height={100}
              src={icShare}
              alt="share"
              className={styles['folder-list-button-icons']}
              onClick={handleShareOpen}
            />
            <div
              className={styles['folder-list-button-ic-text']}
              onClick={handleShareOpen}
            >
              공유
            </div>
            <Image
              width={100}
              height={100}
              src={icEdit}
              alt="edit"
              className={styles['folder-list-button-icons']}
              onClick={handleUpdateOpen}
            />
            <div
              className={styles['folder-list-button-ic-text']}
              onClick={handleUpdateOpen}
            >
              이름 변경
            </div>
            <Image
              width={100}
              height={100}
              src={icDelete}
              alt="delete"
              className={styles['folder-list-button-icons']}
              onClick={handleDeleteOpen}
            />
            <div
              className={styles['folder-list-button-ic-text']}
              onClick={handleDeleteOpen}
            >
              삭제
            </div>
          </div>
        )}
        <ShareModal
          isOpen={isShareModalOpen}
          modalTitle="폴더 공유"
          folderId={selectedFolder?.id}
          name={selectedFolder?.name || ''}
          description={selectedFolder?.description || ''}
          setOpen={setShareModalOpen}
        />
        <UpdateModal
          isOpen={isUpdateModalOpen}
          modalTitle="폴더 이름 변경"
          setOpen={setUpdateModalOpen}
        />
        <DeleteFolderModal
          isOpen={isDeleteModalOpen}
          modalTitle="폴더 삭제"
          setOpen={setDeleteModalOpen}
          name={selectedFolder?.name || ''}
        />
      </div>
    </>
  );
};

export default FolderListButton;
