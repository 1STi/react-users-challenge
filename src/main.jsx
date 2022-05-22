import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import ReactRoutes from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactRoutes />
  </React.StrictMode>,
);
