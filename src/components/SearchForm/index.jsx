import { useState } from 'react';

export default function SearchForm({
  handleSearch,
  handleList,
  list,
}) {
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
        <input
          type="checkbox"
          checked={list === 'avatar'}
          onChange={handleList}
        />
      </form>
    </>
  );
}
