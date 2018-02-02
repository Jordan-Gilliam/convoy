import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { render } from 'react-dom';
// import transport from '../../public/assets/images/travel.png';
import users from './users.json';
import { firebaseApp, db } from '../firebase';
import firebase from 'firebase';

//...
let user = { name: "You", lat: 37.779519, lng: -122.405640 }

let latt = 100;
let longg = "";

export class MapContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users,
            lat: "",
            lng: "",
            members: []
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
        console.log("this.props.uid: ", this.props.uid)
        console.log("this.props.convoy: " + this.props.convoy);
        this.setState({ uid: this.props.uid });
        // console.log("position?: " + this.props.currentPosition || "not yet");  
        //call handlePosition here, but should just handle queries now...
        db.ref(`convoys/${this.props.convoy}/members`).on("value", snapshot => {
            const members = snapshot.val();
            console.log("snapshot: ", members);
            console.log("snapshot.stringify: ", JSON.stringify(members));
            Object.keys(members).forEach(memberId => {
                const attributes = members[memberId];
                this.updateMember(memberId, attributes);
            });
        });
        // this.handlePosition(this.props.uid, this.props.convoy);

    }
    
    updateMember(id, attributes) {
        const index = this.state.members.findIndex(member => member.id === id);
        if (index === -1)
            this.setState({
                members: [
                    ...this.state.members,
                    Object.assign({}, { id }, attributes)
                ]
            })
        else
            this.setState({
                members: [
                    ...this.state.members.slice(0, index),
                    Object.assign({}, this.state.members[index], attributes),
                    ...this.state.members.slice(index + 1)
                ]
            });
    }

    handlePosition = (uid, convoy) => {
        const that = this;
        // window.navigator.geolocation.getCurrentPosition(function(position) {
        //     console.log("latitude: ", position.coords.latitude, " longitude: ", position.coords.longitude);
        //     // latt = position.coords.latitude;
        //     // longg = position.coords.longitude;
        //     that.setState({
        //         lat: position.coords.latitude,
        //         lng: position.coords.longitude
        //     });
    console.log("sending user location to firebase")
    //sends lat and lng to current user at current convoy.  Need to get current user and convoy to do this dynamically
    // db.ref(`/convoys/${convoy}/members/${uid}`).set({
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude
    // });
    //         //next, pull all members at same path and push {name: "name", lat: "lat", lng: "lng"} to array

    //         db.ref(`convoys/${convoy}/members`).on("value", (snapshot) => {
    //             const members = [];
    //             snapshot.forEach((data) => {
    //                 console.log("data.key: " + data.key + " data.value: " + data.value);
    //                 members.push(JSON.stringify(snapshot));
    //                 console.log(members);
    //                 that.setState({ members });
    //             });
    //             console.log("snapshot: ", snapshot);
    //             console.log("JSON.stringify(snapshot): ", JSON.stringify(snapshot));
                // console.log("members: " + members);
        //     });
        // });
    }

    render() {
        const { latitude, longitude } = this.props;

        // console.log("position!: ", currentPosition || "not yet");
        //this.handlePosition(this.props.uid, this.props.convoy);
        // this.setState({lat: this.position.coords.latitude});
        // this.setState({lng: this.position.coords.longitude});
        console.log("lat/lng: ", latitude, longitude);
        console.log("this.state.members: " + JSON.stringify(this.state.members))



        return (
            <Map google={this.props.google}
                zoom={16}
                className={'map'}
                style={{width: '100%', height: '100%'}}
                initialCenter={{lat: this.state.lat, lng: this.state.lng}}
                center={{lat: latitude, lng: longitude}}
            >
                <Marker
                    title={'You'}
                    name={'Your position'}
                    position={{lat: latitude, lng: longitude}}
                    // icon={{transport}}
                    />
                    
                {this.state.members.map(member => (
                    <Marker
                        key={member.id}
                        title={user.name}
                        name={user.name}
                        position={{lat: member.lat, lng: member.lng}}
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
