import Button from '@src/components/button/Button';
import DefaultModal from './DefaultModal';
import useQuery from '@src/hooks/useQuery';
import { FOLDER_DATA_LIST } from '@src/apis'; // FolderItem의 정의는 apis 파일에 있어야 합니다.
import check from '@src/img/ic-check.svg';
import { useState } from 'react';
import { DefaultModalProps } from './types';
import Image from 'next/image';
import styles from './modal.module.scss';

interface AddModalProps extends DefaultModalProps {
  title: string;
}

interface FolderItem {
  id: number;
  name: string;
  link: {
    count: number;
  };
}

export function AddModal(props: AddModalProps) {
  const {
    data: { data: folderList },
  } = useQuery<{ data: FolderItem[] }>(FOLDER_DATA_LIST, { data: [] });

  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const handleFolderItemClick = (folderId: number) => {
    setSelectedFolderId(folderId);
  };

  return (
    <DefaultModal className={styles['add-modal']} {...props}>
      <div className={styles['add-modal-title']}>{props.title}</div>
      <div className={styles['add-modal-folder-list-box']}>
        {folderList.map((folder: FolderItem) => (
          <div
            key={folder.id}
            className={`${styles['add-modal-folder-item']} ${
              selectedFolderId === folder.id ? styles.selected : ''
            }`}
            onClick={() => handleFolderItemClick(folder.id)}
          >
            <span className={styles['add-modal-folder-name']}>
              {folder.name}
            </span>
            <span className={styles['add-modal-folder-link-count']}>
              {folder.link.count}개의 링크
            </span>
            {selectedFolderId === folder.id && (
              <Image
                src={check}
                alt="check"
                className={styles['add-modal-folder-check']}
              />
            )}
          </div>
        ))}
      </div>

      <Button className="modal-button">추가하기</Button>
    </DefaultModal>
  );
}

export default AddModal;
