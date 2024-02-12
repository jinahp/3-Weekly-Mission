import { useMemo, useRef, useState } from 'react';
import { linksUrl } from '@/apis';
import Card from '@/components/card/Card';
import SearchBar from '@/components/searchBar/SearchBar';
import useQuery from '@/hooks/useQuery';
import AddLink from './AddLink';
import FolderListButton from './FolderListButton';
import './folder.scss';

const Folder = () => {
  const mainRef = useRef<HTMLElement | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<any>(null);
  const [searchText, setSearchText] = useState('');

  // 전체 링크
  const {
    data: { data: links },
    error,
  } = useQuery(linksUrl(selectedFolder?.id), {
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
    return <div className="error">에러가 발생했습니다.</div>;
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
      <div className="folder-top">
        <AddLink mainRef={mainRef} text="링크를 추가해 보세요." />
      </div>
      <main ref={mainRef}>
        <SearchBar
          text="링크를 검색해 보세요."
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />

        <FolderListButton
          selectedFolder={selectedFolder}
          setSelectedFolder={setSelectedFolder}
        />
        {filteredLinks.length === 0 ? (
          <div className="emptyLinks">저장된 링크가 없습니다.</div>
        ) : (
          <div className="folder-list">
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
