import { useState, useEffect, useCallback } from 'react';
import api from '../../services/api.js';
import { Link } from 'react-router-dom';
import TableUsers from '../TableUsers/index.jsx';

export default function Table({ search }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/');
      const { results } = response.data;
      setUsers(results);
    }
    fetchData();
  }, []);

  return (
    <>
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
            .map((user) => {
              return (
                <TableUsers
                  key={user.login.uuid}
                  user={user}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
}
