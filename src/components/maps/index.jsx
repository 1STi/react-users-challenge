import React from 'react';

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
} from '@react-google-maps/api';
import { Container } from './styles.js';

//https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions

export default function Maps({ gpsPosition }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_API_MAPS_KEY,
  });

  console.log(gpsPosition);
  return (
    <>
      <Container>
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
                  text: 'Posicão Testeee666',
                  className: 'map-marker',
                },
              }}
            />
          </GoogleMap>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}
