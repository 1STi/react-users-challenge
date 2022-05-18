import './App.css';
import api from './services/api';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/').then((res) => {
      const { results } = res.data;
      setUsers(results);
    });
  }, []);

  return (
    <>
      {console.log(users)}
      <h1>h1PaginaDeTesteee</h1>
      <div className="users">
        {users.map((user, login) => {
          return (
            <div key={login.uuid}>
              <img src={user.picture.thumbnail} /> &nbsp;
              {user.name.first} &nbsp;
              {user.name.last} &nbsp;
              {user.dob.age} &nbsp;
              {user.location.country} &nbsp;
              {user.gender}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
