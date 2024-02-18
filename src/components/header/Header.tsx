import { USER_URL } from '@src/apis';
import useQuery from '@src/hooks/useQuery';
import logo from '@src/img/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';

interface User {
  id: string;
  email: string;
  image_source: string;
}

function Header() {
  const {
    data: { data: [user] } = { data: [] },
    error,
    isLoading,
  } = useQuery<{ data: User[] }>(USER_URL, { data: [] });

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <div className={styles.account}>
          {error && <div className="error">에러가 발생했습니다.</div>}
          {user ? (
            <>
              <Image
                src={user.image_source}
                className={styles['profile-img']}
                alt="profile"
                width={100}
                height={100}
              />
              <span className={styles['account-email']}>{user.email}</span>
            </>
          ) : (
            isLoading || <button className={styles['nav-login']}>로그인</button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
