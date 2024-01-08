import { SAMPLE_USER_URL } from 'apis';
import useQuery from 'hooks/useQuery';
import logo from 'img/logo.svg';
import './header.scss';

export function Header() {
  const { data: user, isLoading } = useQuery(SAMPLE_USER_URL);

  return (
    <header>
      <nav>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className="account">
          {user ? (
            <>
              <img src={user.profileImageSource} className="profile-img" />
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
