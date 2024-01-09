import { FOLDER_DATA_LIST } from 'apis';
import useQuery from 'hooks/useQuery';
import icAdd from 'img/ic-add.svg';
import icAddWhite from 'img/ic-add-w.svg';
import icDelete from 'img/ic-delete.svg';
import icEdit from 'img/ic-edit.svg';
import icShare from 'img/ic-share.svg';
import './folderListButton.scss';

export function FolderListButton({ selectedFolder, setSelectedFolder }) {
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
          <img src={icAdd} alt="add" className="folder-list-button-add" />
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
            />
            <div className="folder-list-button-ic-text">공유</div>
            <img src={icEdit} alt="edit" className="folder-list-button-icons" />
            <div className="folder-list-button-ic-text">이름 변경</div>
            <img
              src={icDelete}
              alt="delete"
              className="folder-list-button-icons"
            />
            <div className="folder-list-button-ic-text">삭제</div>
          </div>
        )}
      </div>
    </>
  );
}

export default FolderListButton;
