import { USER_URL } from '@/apis';
import useQuery from '@/hooks/useQuery';
import logo from '@/img/logo.svg';
import './header.scss';

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
    <header>
      <nav>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className="account">
          {error && <div className="error">에러가 발생했습니다.</div>}
          {user ? (
            <>
              <img
                src={user.image_source}
                className="profile-img"
                alt="profile"
              />
              <span className="account-email">{user.email}</span>
            </>
          ) : (
            isLoading || <button className="nav-login">로그인</button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
