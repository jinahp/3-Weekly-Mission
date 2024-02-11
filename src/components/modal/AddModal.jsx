import Button from 'components/button/Button';
import DefaultModal from './DefaultModal';
import useQuery from 'hooks/useQuery';
import { FOLDER_DATA_LIST } from 'apis';
import check from 'img/ic-check.svg';
import { useState } from 'react';

export function AddModal(props) {
  const {
    data: { data: folderList },
  } = useQuery(FOLDER_DATA_LIST, {
    data: [],
  });

  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const handleFolderItemClick = (folderId) => {
    setSelectedFolderId(folderId);
  };

  return (
    <DefaultModal className="add-modal" {...props}>
      <div className="add-modal-title">{props.title}</div>
      <div className="add-modal-folder-list-box">
        {folderList.map((folder) => (
          <div
            key={folder.id}
            className={`add-modal-folder-item ${
              selectedFolderId === folder.id ? 'selected' : ''
            }`}
            onClick={() => handleFolderItemClick(folder.id)}
          >
            <span className="add-modal-folder-name">{folder.name}</span>
            <span className="add-modal-folder-link-count">
              {folder.link.count}개의 링크
            </span>
            {selectedFolderId === folder.id && (
              <img src={check} alt="check" className="add-modal-folder-check" />
            )}
          </div>
        ))}
      </div>

      <Button className="modal-button">추가하기</Button>
    </DefaultModal>
  );
}

export default AddModal;
