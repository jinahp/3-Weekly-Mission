import search from 'img/ic-search.svg';
import './searchBar.scss';

export function SearchBar({ text }) {
  return (
    <div className="search-bar">
      <div className="search-bar-frame">
        <img className="ic-search" alt="Search" src={search} />
        <div className="search-bar-text-wrapper">{text}</div>
      </div>
    </div>
  );
}

export default SearchBar;
