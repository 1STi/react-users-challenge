import { Link, useParams } from 'react-router-dom';
import React from 'react';
import Maps from '../maps';

export default function Details() {
  //mudar para localização do usuario especifico
  const gpsPosition = {
    lat: -19.86598807097657,
    lng: -43.97114223062192,
  };

  //extraindo o ID do usuario enviado via URL
  const { id } = useParams();
  console.log('idddd do susuario', id);

  // FALTA exibir na pagina details:
  // maps do user especifico
  // Avatar, Nome
  // Cidade, Pais

  return (
    <>
      <Link to="/">
        <button>Voltar</button>
      </Link>
      <Maps gpsPosition={gpsPosition} />
    </>
  );
}
