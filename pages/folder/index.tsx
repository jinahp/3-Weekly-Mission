import { useMemo, useRef, useState } from 'react';
import { getLinksUrl } from '@src/apis';
import Card from '@src/components/card/Card';
import SearchBar from '@src/components/searchBar/SearchBar';
import useQuery from '@src/hooks/useQuery';
import AddLink from './AddLink';
import FolderListButton from './FolderListButton';
import styles from './folder.module.scss';

const Folder = () => {
  const [selectedFolder, setSelectedFolder] = useState<any>(null);
  const [searchText, setSearchText] = useState('');

  // 전체 링크
  const {
    data: { data: links },
    error,
  } = useQuery(getLinksUrl(selectedFolder?.id), {
    data: [],
  });

  const filteredLinks = useMemo(() => {
    return links.filter(
      (link: any) =>
        (link.url && link.url.toLowerCase().includes(searchText)) ||
        (link.title && link.title.toLowerCase().includes(searchText)) ||
        (link.description &&
          link.description.toLowerCase().includes(searchText))
    );
  }, [links, searchText]);

  if (error) {
    return <div className={styles.error}>에러가 발생했습니다.</div>;
  }

  const handleSearchChange = (searchTerm: string) => {
    setSearchText(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // 엔터 키를 누를 때 링크 필터링
      handleSearchChange(searchText);
    }
  };

  return (
    <>
      <div className={styles['folder-top']}>
        <AddLink text="링크를 추가해 보세요." />
      </div>
      <main>
        <SearchBar
          text="링크를 검색해 보세요."
          onChange={handleSearchChange}
          onKeyUp={handleKeyPress}
        />

        <FolderListButton
          selectedFolder={selectedFolder}
          setSelectedFolder={setSelectedFolder}
        />
        {filteredLinks.length === 0 ? (
          <div className={styles.emptyLinks}>저장된 링크가 없습니다.</div>
        ) : (
          <div className={styles['folder-list']}>
            {filteredLinks.map((item: any) => (
              <Card link={item} key={item.id} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Folder;
