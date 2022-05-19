import './App.css';
import api from './services/api';
import { useState, useEffect } from 'react';

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
      <h1>h1PaginaDeTesteee</h1>

      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      {users
        .filter((user) => {
          if (search == '') {
            return user;
          } else if (
            user.name.first
              .toLowerCase()
              .includes(search.toLowerCase())
          ) {
            return user;
          }
        })
        .map((user, login) => {
          return (
            <div className="users" key={login.uuid}>
              <p>{user.name.first}</p>
            </div>
          );
        })}
    </>
  );
}

export default App;
