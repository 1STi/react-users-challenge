import { Link } from 'react-router-dom';
import React from 'react';
import Maps from '../maps';

export default function Details() {
  return (
    <>
      <Link to="/">
        <button>voltar</button>
      </Link>
      <Maps />
    </>
  );
}
