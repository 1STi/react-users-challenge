import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import Table from './components/Table';
import { Container } from '../src/styles/App.js';

function App() {
  const [search, setSearch] = useState('');
  const [listType, setListType] = useState('list');

  function handleListType() {
    if (listType === 'avatar') {
      setListType('list');
    } else {
      setListType('avatar');
    }
  }
  return (
    <>
      <Container>
        <SearchForm
          handleSearch={setSearch}
          handleList={handleListType}
        />
        <main className="main">
          <Table
            search={search}
            listType={listType}
            list={listType}
          />
        </main>
      </Container>
    </>
  );
}

export default App;
