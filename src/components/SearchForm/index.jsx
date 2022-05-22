import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Container } from './styles.js';

export default function SearchForm({
  handleSearch,
  handleList,
  list,
}) {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <Container>
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

          <button type="submit" className="buttonSearch">
            <FiSearch size={25} color="#FFF" />
          </button>

          <input
            type="checkbox"
            checked={list === 'avatar'}
            onChange={handleList}
          />
        </form>
      </Container>
    </>
  );
}
