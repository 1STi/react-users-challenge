import { useState, useEffect, useCallback } from 'react';
import api from '../../services/api.js';
import { Link } from 'react-router-dom';
import TableUsers from '../TableUsers/index.jsx';

export default function Table({ search }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/').then((res) => {
      const { results } = res.data;
      setUsers(results);
    });
  }, []);

  const renderUsers = useCallback(() => {
    const filteredUsers = users.filter((user) => {
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
    });
    return filteredUsers;
  }, [users]);

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
              const detailsName = `${user.name.first} ${user.name.last}`;
              const detailsPicture = user.picture.thumbnail;
              const detailsLocation = `${user.location.city}, ${user.location.state}, ${user.location.country}`;

              return (
                <TableUsers
                  key={user.login.uuid}
                  detailsName={detailsName}
                  detailsPicture={detailsPicture}
                  detailsLocation={detailsLocation}
                  user={user}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
}
