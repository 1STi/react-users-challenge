import { useState } from 'react';

export default function SearchForm({ handleSearch }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <input
        type="text"
        placeholder="Search users..."
        onChange={(event) =>
          setSearchValue(event.target.value)
        }
        value={searchValue}
      />
      <button onClick={() => handleSearch(searchValue)}>
        Search
      </button>
    </>
  );
}
