import { useState } from 'react';

export default function SearchForm({
  handleSearch,
  handleList,
  list,
  search,
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
            handleSearch(event.target.value)
          }
          value={search}
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
