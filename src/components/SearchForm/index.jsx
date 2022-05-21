import { useState } from 'react';

export default function SearchForm({ handleSearch }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSearch(searchValue);
        }}
      >
        <input
          type="text"
          placeholder="Search users..."
          onChange={(event) =>
            setSearchValue(event.target.value)
          }
          value={searchValue}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
