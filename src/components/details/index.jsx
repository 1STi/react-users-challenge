import {
  Link,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import React from 'react';
import Maps from '../maps';

export default function Details() {
  //mudar para localização do usuario especifico
  const gpsPosition = {
    lat: -19.86598807097657,
    lng: -43.97114223062192,
  };

  // const search = useLocation().search;
  // const user = new URLSearchParams(search);

  const [searchParams] = useSearchParams();
  const user = Object.fromEntries([...searchParams]);

  // FALTA exibir na pagina details:
  // maps do user especifico
  // Avatar
  //Nome, Cidade, Estado, Pais

  return (
    <>
      <Link to="/">
        <button>Voltar</button>
      </Link>
      <Maps gpsPosition={gpsPosition} />
      <div className="userInfos">
        <p>{user.name}</p>
      </div>
    </>
  );
}
