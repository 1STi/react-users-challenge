import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Details from './components/details';
import App from './App';

export default function ReactRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
