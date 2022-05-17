import './App.css';
import api from './services/api';

function App() {
  api.get('/').then((res) => {
    const { results } = res.data;
    console.log(results);
  });

  return (
    <>
      <h1>h1testando</h1>
    </>
  );
}

export default App;
