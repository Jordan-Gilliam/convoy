import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { render } from 'react-dom';

//hard code for convoy user locations.
const users = [
    {name: "Jordan", lat: 37.778519, lng: -122.405640},
    {name: "Jim", lat: 37.779519, lng: -122.405640},
    {name: "Morgan", lat: 37.777519, lng: -122.405640},
    {name: "Bella", lat: 37.776519, lng: -122.405640}];

//MapContainer takes an array of objects - {name: "name", lat: integer, lng: integer}
export class MapContainer extends React.Component {
    render() {
    return (
      <Map google={this.props.google} zoom={15}>
 
        <Marker
            title={users[0].name}
            name={users[0].name}
            position={{lat: users[0].lat, lng: users[0].lng}}
             />
             
        <Marker
            title={users[1].name}
            name={users[1].name}
            position={{lat: users[1].lat, lng: users[1].lng}}
             />
             
        <Marker
            title={users[2].name}
            name={users[2].name}
            position={{lat: users[2].lat, lng: users[2].lng}}
             />
             
        <Marker
            title={users[3].name}
            name={users[3].name}
            position={{lat: users[3].lat, lng: users[3].lng}}
             />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
                
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAYXEwpbEwyadzAFtziBwl7ZSEVnRse_tw"
})(MapContainer);