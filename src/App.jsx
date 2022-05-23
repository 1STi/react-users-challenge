import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import Table from './components/Table';
import { GlobalStyle } from './globalStyle';

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
      <GlobalStyle />
      <SearchForm
        handleSearch={setSearch}
        handleList={handleListType}
      />
      <main>
        <Table
          search={search}
          listType={listType}
          list={listType}
        />
      </main>
    </>
  );
}

export default App;
