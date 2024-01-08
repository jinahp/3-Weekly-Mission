import search from 'img/ic-search.svg';
import './searchBar.scss';

export function SearchBar({ text }) {
  return (
    <div className="search-bar">
      <div className="search-bar-frame">
        <img className="ic-search" alt="Search" src={search} />
        <input className="search-bar-text-wrapper" placeholder={text} />
      </div>
    </div>
  );
}

export default SearchBar;
