import React from 'react';

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
} from '@react-google-maps/api';
import './styles.css';

export default function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_API_MAPS_KEY,
  });

  const gpsPosition = {
    lat: -27.590824,
    lng: -48.551262,
  };

  return (
    <>
      <div className="map">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '100%',
            }}
            center={gpsPosition}
            zoom={15}
          >
            <Marker
              position={gpsPosition}
              options={{
                label: {
                  text: 'Posicão Testeee',
                  className: 'map-marker',
                },
              }}
            />
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
