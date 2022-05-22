import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactRoutes from './routes';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactRoutes />
  </React.StrictMode>,
);
