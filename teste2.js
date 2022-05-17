import { useState } from 'react';
import './App.css';
//import api from './services/api';
import axios from 'axios';

const api = axios.create({
  baseURL: `https://randomuser.me/api/`,
});
function App() {
  api.get('/').then((res) => {
    console.log(res.data);
  });

  return (
    <>
      <h1>h1testando</h1>
    </>
  );
}

export default App;
