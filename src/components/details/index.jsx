import {
  Link,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import React from 'react';
import Maps from '../maps';

export default function Details() {
  const [searchParams] = useSearchParams();
  const user = Object.fromEntries([...searchParams]);

  // lat: -19.866109155347445,
  // lng: -43.9709705695494,
  const gpsPosition = {
    lat: parseFloat(user.lat),
    lng: parseFloat(user.lng),
  };
  //CORRIGIR: lat e lng -> não esta funcionando corretamente

  return (
    <>
      <Link to="/">
        <button>Voltar</button>
      </Link>
      <Maps gpsPosition={gpsPosition} />
      <div className="userInfos">
        <img src={user.picture} />
        <p>{user.name}</p>
        <p>{user.location}</p>
      </div>
    </>
  );
}
