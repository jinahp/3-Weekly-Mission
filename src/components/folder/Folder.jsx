import { ALL_LINKS_URL } from 'apis';
import Card from 'components/card/Card';
import SearchBar from 'components/searchBar/SearchBar';
import useQuery from 'hooks/useQuery';
import AddLink from './AddLink';
import './folder.scss';

export function Folder() {
  // 전체 링크
  const {
    data: { data: links },
    error,
  } = useQuery(ALL_LINKS_URL, {
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
        <div className="folder-list">
          {links.map((item) => (
            <Card link={item} key={item.id} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Folder;
