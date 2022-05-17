import { useState } from 'react';
import './App.css';
//import api from './services/api';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  const onClickHandler = () => {
    axios
      .get('https://randomuser.me/api/')
      .then((response) => {
        console.log(response);
        setUsers(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={onClickHandler()}>TesteButton</button>
    </>
  );
}

export default App;
