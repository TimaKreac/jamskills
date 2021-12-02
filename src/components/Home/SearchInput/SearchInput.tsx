import React from 'react';

import styles from './SearchInput.module.scss';

interface SearchInputProps {}

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <div className={styles.box}>
      <input type="text" placeholder="Поиск..." />
      <button>
        <img src="/assets/search.svg" alt="search" />
      </button>
    </div>
  );
};

export default SearchInput;
