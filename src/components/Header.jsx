import logo from 'img/logo.svg';
import './Header.scss';

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className="account">
        </div>
      </nav>
    </header>
  );
}

export default Header;
