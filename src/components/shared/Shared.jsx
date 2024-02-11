import { SAMPLE_FOLDER_URL } from 'apis';
import Card from 'components/card/Card';
import DeleteModal from 'components/modal/DeleteModal';
import SearchBar from 'components/searchBar/SearchBar';
import useQuery from 'hooks/useQuery';
import { useSearchParams } from 'react-router-dom';
import './shared.scss';

export function Shared() {
  const [params, setParams] = useSearchParams();
  const userId = params.get('userId');
  const folderId = params.get('folderId');
  const url = SAMPLE_FOLDER_URL; //linksUrl(folderId);
  const {
    data: {
      folder: { links, owner, ...folder },
    },
    error,
    isLoading,
  } = useQuery(url, {
    folder: { links: [], owner: {} },
  });

  if (error) {
    return <div className="error">에러가 발생했습니다.</div>;
  }

  return (
    <>
      <div className="top">
        {isLoading || (
          <div className="shared-folder">
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
        <div className="shared-list">
          {links.map((item) => (
            <Card link={item} key={item.id} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Shared;
