import './App.css';
import api from './services/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Table from './components/Table';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.get('/').then((res) => {
      const { results } = res.data;
      setUsers(results);
    });
  }, []);

  return (
    <>
      <SearchForm handleSearch={setSearch} />

      <Table />
    </>
  );
}

export default App;
