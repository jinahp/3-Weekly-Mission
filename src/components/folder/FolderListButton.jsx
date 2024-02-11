import { FOLDER_DATA_LIST } from 'apis';
import AddFolderModal from 'components/modal/AddFolderModal';
import ShareModal from 'components/modal/ShareModal';
import UpdateModal from 'components/modal/UpdateModal';
import useQuery from 'hooks/useQuery';
import icAddWhite from 'img/ic-add-w.svg';
import icAdd from 'img/ic-add.svg';
import icDelete from 'img/ic-delete.svg';
import icEdit from 'img/ic-edit.svg';
import icShare from 'img/ic-share.svg';
import { useState } from 'react';
import './folderListButton.scss';
import DeleteFolderModal from 'components/modal/DeleteFolderModal';

export function FolderListButton({ selectedFolder, setSelectedFolder }) {
  const [isOpen, setOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const {
    data: { data: folders },
  } = useQuery(FOLDER_DATA_LIST, {
    data: [],
  });

  const handleShowAllLinks = () => {
    setSelectedFolder(null);
  };

  const handleFolderClick = (folder) => {
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
      <div className="folder-list-button-wrapper">
        <div className="folder-list-button" onClick={handleShowAllLinks}>
          전체
        </div>
        {folders.map((folder) => (
          <div
            key={folder.id}
            className={`folder-list-button ${
              selectedFolder === folder ? 'active' : ''
            }`}
            onClick={() => handleFolderClick(folder)}
          >
            {folder.name}
          </div>
        ))}
        <div className="folder-list-button-ic-add-wrapper">
          <span className="folder-list-button-mobile-text">폴더추가</span>
          <img
            src={icAdd}
            alt="add"
            className="folder-list-button-add"
            onClick={() => setOpen(true)}
          />
          <AddFolderModal isOpen={isOpen} setOpen={setOpen} />
          <img
            src={icAddWhite}
            alt="add"
            className="folder-list-button-add-white"
          />
        </div>
      </div>
      <div className="folder-list-button-box">
        <div className="folder-list-button-title-wrapper">
          <div className="folder-list-button-title">
            {selectedFolder?.name || '전체'}
          </div>
        </div>
        {selectedFolder && (
          <div className="folder-list-button-icons-wrapper">
            <img
              src={icShare}
              alt="share"
              className="folder-list-button-icons"
              onClick={handleShareOpen}
            />
            <div
              className="folder-list-button-ic-text"
              onClick={handleShareOpen}
            >
              공유
            </div>
            <img
              src={icEdit}
              alt="edit"
              className="folder-list-button-icons"
              onClick={handleUpdateOpen}
            />
            <div
              className="folder-list-button-ic-text"
              onClick={handleUpdateOpen}
            >
              이름 변경
            </div>
            <img
              src={icDelete}
              alt="delete"
              className="folder-list-button-icons"
              onClick={handleDeleteOpen}
            />
            <div
              className="folder-list-button-ic-text"
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
          name={selectedFolder?.name}
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
          name={selectedFolder?.name}
        />
      </div>
    </>
  );
}

export default FolderListButton;
