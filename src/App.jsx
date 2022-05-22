import './App.css';
import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import Table from './components/Table';

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
      <SearchForm
        handleSearch={setSearch}
        search={search}
        handleList={handleListType}
      />
      <Table
        search={search}
        listType={listType}
        list={listType}
      />
    </>
  );
}

export default App;
