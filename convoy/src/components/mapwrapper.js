import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { render } from 'react-dom';
// import transport from '../../public/assets/images/travel.png';
import users from './users.json';
// import firebaseSearch from './firebaseSearch';

//...
const user = {name: "You", lat: 37.779519, lng: -122.405640}

    
export class MapContainer extends React.Component {
    state = {
        users,
    }
    
    render() {
    return (
      <Map google={this.props.google} 
        zoom={16}
        className={'map'}
        style={{width: '100%', height: '100%'}}
        initialCenter={{lat: user.lat, lng: user.lng}}>
        <Marker
            title={'You'}
            name={'Your position'}
            position={{lat: user.lat, lng: user.lng}}
            // icon={{transport}}
            />
            
        {this.state.users.map(user => (
            <Marker
            title={user.name}
            name={user.name}
            position={{lat: user.lat, lng: user.lng}}
             />
        ))}

        
             
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