import { SAMPLE_FOLDER_URL } from 'apis';
import Card from 'components/card/Card';
import SearchBar from 'components/searchBar/SearchBar';
import useQuery from 'hooks/useQuery';
import './favorite.scss';

export function Favorite() {
  const {
    data: {
      folder: { links, owner, ...folder },
    },
    error,
    isLoading,
  } = useQuery(SAMPLE_FOLDER_URL, {
    folder: { links: [], owner: {} },
  });

  if (error) {
    return <div className="error">에러가 발생했습니다.</div>;
  }

  return (
    <>
      <div className="top">
        {isLoading || (
          <div className="favorite-folder">
            <img
              className="ic-smile"
              alt="smile"
              src={owner.profileImageSource}
            />
            <div className="folder-username">{owner.name}</div>
            <div className="folder-name">{folder.name}</div>
          </div>
        )}
      </div>
      <main>
        <SearchBar text="링크를 검색해 보세요." />
        <div className="favorite-list">
          {links.map((item) => (
            <Card link={item} key={item.id} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Favorite;
