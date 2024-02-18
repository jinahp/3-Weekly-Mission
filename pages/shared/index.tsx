import { SAMPLE_FOLDER_URL } from '@src/apis';
// import Card from '@src/components/card/Card';
import SearchBar from '@src/components/searchBar/SearchBar';
import useQuery from '@src/hooks/useQuery';
import Image from 'next/image';
import styles from './shared.module.scss';

interface Folder {
  links: Link[];
  name?: string;
  owner: {
    name?: string;
    profileImageSource?: string;
  };
}

interface SampleFolder {
  folder: Folder;
}

const Shared = () => {
  const url = SAMPLE_FOLDER_URL;
  const {
    data: {
      folder: { links, owner, ...folder },
    },
    error,
    isLoading,
  } = useQuery<SampleFolder>(url, {
    folder: { links: [], owner: {} },
  });

  if (error) {
    return <div className="error">에러가 발생했습니다.</div>;
  }

  return (
    <>
      <div className={styles.top}>
        {isLoading || (
          <div className={styles['shared-folder']}>
            <Image
              width={100}
              height={100}
              className={styles['ic-smile']}
              alt="smile"
              src={owner.profileImageSource ?? ''}
            />
            <div className={styles['folder-username']}>{owner.name}</div>
            <div className={styles['folder-name']}>{folder.name}</div>
          </div>
        )}
      </div>
      <main className={styles.main}>
        <SearchBar text="링크를 검색해 보세요." />
        {/* <div className="shared-list">
          {links.map((item: Link) => (
            <Card link={item} key={item.id} />
          ))}
        </div> */}
      </main>
    </>
  );
};

export default Shared;
