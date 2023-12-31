import useQuery from "hooks/useQuery";
import Card from "./Card";
import "./Favorite.scss";
import SearchBar from "./SearchBar";

export function Favorite() {
  const {
    data: {
      folder: { links, owner, ...folder },
    },
    isLoading,
  } = useQuery("https://bootcamp-api.codeit.kr/api/sample/folder", {
    folder: { links: [], owner: {} },
  });

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
            <Card link={item} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Favorite;
