import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { render } from 'react-dom';
// import transport from '../../public/assets/images/travel.png';
import users from './users.json';
import { firebaseApp, db } from '../firebase';
import firebase from 'firebase';

//...
const user = {name: "You", lat: 37.779519, lng: -122.405640}

    
export class MapContainer extends React.Component {
    state = {
        lat: "",
        lng: "",
        uid: ""
    }
    constructor(props) {
        super(props)
    
    this.state = {
        users,
        lat: 0,
        lng: 0,
    }
    }

    MapUpdater = () => {
         //get current lat, lng
        //  console.log("latitude: ", this.state.latitude, " longitude: ", this.state.longitude) 
         console.log(" user: ", this.props.user.uid, " convoy: ", this.props.convoy);
         console.log("MapUpdater executing");
         //set current lat, lng to UID in convoy/members
        //  db.ref(`convoys/${this.props.convoy}/members/${this.props.user.uid}`).set({lat: 10, lng: 11});
         //get all from members where member is UID (gets current user name and geolocation)
         //get all from members where member is not UID (gets all other members names and geolocation)
         //pass into array with format {name: name, lat: lat, lng: lng}
         console.log("getCurrentPosition fired");
       } 
    
    
    componentDidMount() {
        console.log("this.props: ", this.props.uid)
        this.setState({uid: this.props.uid});
        // console.log("position?: " + this.props.currentPosition || "not yet");  
    }
    
    handlePosition = (uid) => {
        window.navigator.geolocation.getCurrentPosition(function(position) {
            console.log("uid?: ");
            console.log("latitude: ", position.coords.latitude, " longitude: ", position.coords.longitude);
            // this.setState({lat: position.coords.latitude});
            // this.setState({lng: position.coords.longitude});
            //sends lat and lng to current user at current convoy.  Need to get current user and convoy to do this dynamically
            db.ref(`/convoys/-L47M0eLT4rSKNkuFXAR/members/${uid}`).set({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
            //next, pull all members at same path and push {name: "name", lat: "lat", lng: "lng"} to array
            

        }); 
    }
    
    render() {
        const { currentPosition } = this.props;
        // console.log("position!: ", currentPosition || "not yet");
        this.handlePosition(this.props.uid);

 

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