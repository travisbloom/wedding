import * as React from 'react';
import { GoogleMap as GoogleMapLib, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { compose, withProps } from 'recompose';

export const GoogleMap = compose<{ latLng: google.maps.LatLngLiteral }, { latLng: google.maps.LatLngLiteral }>(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAZDYLE0m3ty9JZWDx2LdFWZwdB9Zc8ay8&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `400px` }} />,
    containerElement: <div style={{ height: `400px`, width: '100%' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(({ latLng }) => {
  return (
    <GoogleMapLib defaultZoom={9} defaultCenter={latLng}>
      <Marker position={latLng} />{' '}
    </GoogleMapLib>
  );
});