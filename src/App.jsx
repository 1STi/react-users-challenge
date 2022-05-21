import './App.css';
import api from './services/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Table from './components/Table';

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <SearchForm handleSearch={setSearch} />
      <Table search={search} />
    </>
  );
}

export default App;
