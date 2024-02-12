import search from '@/img/ic-search.svg';
import './searchBar.scss';

interface SearchBarProps {
  text: string;
}

const SearchBar = ({ text }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <div className="search-bar-frame">
        <img className="ic-search" alt="Search" src={search} />
        <input className="search-bar-text-wrapper" placeholder={text} />
      </div>
    </div>
  );
};

export default SearchBar;
