import { useState, useEffect, useCallback } from 'react';
import api from '../../services/api.js';
import TableUsers from '../TableUsers/index.jsx';
import { Link } from 'react-router-dom';
import { Container } from './styles.js';

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
    return (
      <>
        <section className="avatar">
          {users.map((user) => {
            const detailsName = `${user.name.first} ${user.name.last}`;
            const detailsPicture = user.picture.thumbnail;
            const detailsLocation = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
            return (
              <ul
                className="avatar-list"
                key={user.login.uuid}
              >
                <li className="avatar-items">
                  <Link
                    to={`/details?name=${detailsName}&picture=${detailsPicture}&location=${detailsLocation}&lat=${user.location.coordinates.latitude}&lng=${user.location.coordinates.longitude}`}
                  >
                    <img src={user.picture.thumbnail} />
                  </Link>
                  <p>{user.name.first}</p>
                </li>
              </ul>
            );
          })}
        </section>
      </>
    );
  }

  const usersFiltered = users.filter(usersFilter);

  function usersFilter(user) {
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
  }

  return (
    <>
      <Container className="Table">
        <table>
          <thead>
            <tr className="table-header">
              <th>Photo</th>
              <th>Name</th>
              <th>Age</th>
              <th>Contry</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {usersFiltered.length === 0 ? (
              <p className="user-notfound">
                user not found
              </p>
            ) : (
              usersFiltered.map((user) => {
                return (
                  <TableUsers
                    key={user.login.uuid}
                    user={user}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </Container>
    </>
  );
}
