import { Link } from 'react-router-dom';
import React from 'react';
import Maps from '../maps';

export default function Details() {
  //não esta funcionando essa comunicação de componentes
  const gpsPosition = {
    lat: -19.86598807097657,
    lng: -43.97114223062192,
  };
  return (
    <>
      <Link to="/">
        <button>Voltar</button>
      </Link>
      <Maps gpsPosition={gpsPosition} />
    </>
  );
}
