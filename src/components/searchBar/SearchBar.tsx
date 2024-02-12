import React, { useState } from 'react';
import icSearch from '@/img/ic-search.svg';
import icDelete from '@/img/ic-search-delete.svg';
import './searchBar.scss';

interface SearchBarProps {
  text: string;
  onChange: (searchText: string) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ text, onChange, onKeyPress }: SearchBarProps) => {
  const [searchText, setSearchText] = useState('');

  const handleDeleteClick = () => {
    setSearchText('');
    onChange('');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchText(searchTerm);
    onChange(searchTerm);
  };

  return (
    <div className="search-bar">
      <div className="search-bar-frame">
        <img className="ic-search" alt="Search" src={icSearch} />
        <input
          className="search-bar-text-wrapper"
          placeholder={text}
          value={searchText}
          onChange={handleSearchChange}
          onKeyPress={onKeyPress}
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
