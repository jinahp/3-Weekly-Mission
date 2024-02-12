import icSearch from '@/img/ic-search.svg';
import icDelete from '@/img/ic-search-delete.svg';
import './searchBar.scss';
import { useState } from 'react';

interface SearchBarProps {
  text: string;
}

const SearchBar = ({ text }: SearchBarProps) => {
  const [searchText, setSearchText] = useState('');

  const handleDeleteClick = () => {
    setSearchText('');
  };

  return (
    <div className="search-bar">
      <div className="search-bar-frame">
        <img className="ic-search" alt="Search" src={icSearch} />
        <input
          className="search-bar-text-wrapper"
          placeholder={text}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <img
          className="ic-search-delete"
          alt="search-delete"
          src={icDelete}
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export default SearchBar;
