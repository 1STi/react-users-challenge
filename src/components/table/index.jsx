import { useState, useEffect, useCallback } from 'react';
import api from '../../services/api.js';
import TableUsers from '../TableUsers/index.jsx';
import { Link } from 'react-router-dom';

export default function Table({ search, listType }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/?results=12&nat=br');
      const { results } = response.data;
      setUsers(results);
    }
    fetchData();
  }, []);

  if (listType === 'avatar') {
    console.log('testttAvatar', users);

    return (
      <>
        <h1> lista de avatares </h1>
        <p>testeeee</p>
        <div>
          {users.map((user) => {
            const detailsName = `${user.name.first} ${user.name.last}`;
            const detailsPicture = user.picture.thumbnail;
            const detailsLocation = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
            return (
              <div
                className="avatars"
                key={user.login.uuid}
              >
                <Link
                  to={`/details?name=${detailsName}&picture=${detailsPicture}&location=${detailsLocation}&lat=${user.location.coordinates.latitude}&lng=${user.location.coordinates.longitude}`}
                >
                  <img src={user.picture.thumbnail} />
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  }

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
