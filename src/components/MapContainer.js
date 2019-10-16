// Google maps component

import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '20%',
  height: '15%',
};

function MapContainer(props) {
   
        return (
          <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: {props.lat}, lng: {props.long}}}
        >
          <Marker position={{ lat: {props.lat}, lng: {props.long}}} />
        </Map>
        );
      
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDcbKy88ktKrQ9jYW-FiRrwlRNtYMaHJLk'
  })(MapContainer);