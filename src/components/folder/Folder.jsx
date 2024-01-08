import { linksUrl } from 'apis';
import Card from 'components/card/Card';
import SearchBar from 'components/searchBar/SearchBar';
import useQuery from 'hooks/useQuery';
import { useState } from 'react';
import AddLink from './AddLink';
import FolderListButton from './FolderListButton';
import './folder.scss';

export function Folder() {
  const [selectedFolder, setSelectedFolder] = useState(null);

  // 전체 링크
  const {
    data: { data: links },
    error,
  } = useQuery(linksUrl(selectedFolder?.id), {
    data: [],
  });

  if (error) {
    return <div className="error">에러가 발생했습니다.</div>;
  }

  return (
    <>
      <div className="folder-top">
        <AddLink text="링크를 추가해 보세요." />
      </div>
      <main>
        <SearchBar text="링크를 검색해 보세요." />

        <FolderListButton
          selectedFolder={selectedFolder}
          setSelectedFolder={setSelectedFolder}
        />
        {links.length === 0 ? (
          <div className="emptyLinks">저장된 링크가 없습니다.</div>
        ) : (
          <div className="folder-list">
            {links.map((item) => (
              <Card link={item} key={item.id} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Folder;
