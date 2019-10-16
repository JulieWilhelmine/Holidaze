// Google maps component

import React from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '20%',
  height: '15%',
};

function MapContainer() {
   
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: {this.props.lat}, lng: {this.props.long}}}
            />
        );
      
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDcbKy88ktKrQ9jYW-FiRrwlRNtYMaHJLk'
  })(MapContainer);