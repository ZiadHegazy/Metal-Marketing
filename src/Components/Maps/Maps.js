import React from 'react';
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
const Maps = () => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 30.271810,  // Example latitude
    lng: 31.784204 // Example longitude
  };

  return (
    <APIProvider apiKey='AIzaSyBHassE--gnX3mJZrZkbIcCONP1LhObwGo' onLoad={() => console.log('Maps API has loaded.')}>
   <Map
      defaultZoom={13}
      defaultCenter={ { lat: 30.271810, lng: 31.784204 } }
      onCameraChanged={ (ev) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }>
   </Map>
 </APIProvider>
  );
}

export default Maps;
