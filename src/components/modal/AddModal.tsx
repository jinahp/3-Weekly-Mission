import { FOLDER_DATA_LIST } from '@src/apis'; // FolderItem의 정의는 apis 파일에 있어야 합니다.
import { ModalButton } from '@src/components/button/Button';
import useQuery from '@src/hooks/useQuery';
import check from '@src/img/ic-check.svg';
import Image from 'next/image';
import { useState } from 'react';
import DefaultModal from './DefaultModal';
import styles from './modal.module.scss';
import { DefaultModalProps } from './types';

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

      <ModalButton>추가하기</ModalButton>
    </DefaultModal>
  );
}

export default AddModal;
