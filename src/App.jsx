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
      <input
        className="search"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <button onClick={() => {}}>Search</button>

      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Age</th>
            <th>Contry</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => {
              console.log(user);
              if (search == '') {
                return user;
              } else if (
                user.name.first
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                user.name.last
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                String(user.dob.age)
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                user.location.country
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                user.gender
                  .toLowerCase()
                  .includes(search.toLowerCase())
              ) {
                return user;
              }
            })
            .map((user, login) => {
              return (
                <tr className="users" key={login.uuid}>
                  <td>
                    <img src={user.picture.thumbnail} />
                  </td>
                  <td>
                    {user.name.first} {user.name.last}
                  </td>
                  <td>{user.dob.age}</td>
                  <td>{user.location.country}</td>
                  <td>{user.gender}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default App;
