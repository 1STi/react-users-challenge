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
        className="search"
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
            <table>
              <tbody>
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Age</th>
                  <th>Contry</th>
                  <th>Gender</th>
                </tr>
                <tr className="users" key={login.uuid}>
                  <td>
                    <img src={user.picture.thumbnail} />
                  </td>
                  <td>{user.name.first}</td>
                  <td>{user.name.last}</td>
                  <td>{user.dob.age}</td>
                  <td>{user.location.country}</td>
                  <td>{user.gender}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
    </>
  );
}

export default App;
