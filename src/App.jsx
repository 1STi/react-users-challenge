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
            <ul className="users" key={login.uuid}>
              <li>
                <img src={user.picture.thumbnail} /> &nbsp;
                {user.name.first} &nbsp;
                {user.name.last} &nbsp;
                {user.dob.age} &nbsp;
                {user.location.country} &nbsp;
                {user.gender}
              </li>
            </ul>
          );
        })}
    </>
  );
}

export default App;
