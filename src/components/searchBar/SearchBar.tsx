import React, { useState } from 'react';
import icSearch from '@src/img/ic-search.svg';
import icDelete from '@src/img/ic-search-delete.svg';
import styles from './searchBar.module.scss';
import Image from 'next/image';

interface SearchBarProps {
  text: string;
  onChange?: (searchText: string) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ text, onChange, onKeyUp }: SearchBarProps) => {
  const [searchText, setSearchText] = useState('');

  const handleDeleteClick = () => {
    setSearchText('');
    onChange?.('');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchText(searchTerm);
    onChange?.(searchTerm);
  };

  return (
    <div className={styles['search-bar']}>
      <div className={styles['search-bar-frame']}>
        <Image className={styles['ic-search']} alt="Search" src={icSearch} />
        <input
          className={styles['search-bar-text-wrapper']}
          placeholder={text}
          value={searchText}
          onChange={handleSearchChange}
          onKeyUp={onKeyUp}
        />
        {searchText && (
          <Image
            width={100}
            height={100}
            className={styles['ic-search-delete']}
            alt="search-delete"
            src={icDelete}
            onClick={handleDeleteClick}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
