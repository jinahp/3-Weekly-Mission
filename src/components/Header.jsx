import logo from 'img/logo.svg';

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
