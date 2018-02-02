import React, { Component } from 'react';
import { firebaseApp, db } from '../firebase';
class GeolocationContainer extends Component {
  state = {
    latitude: null,
    longitude: null
  };

  updatePosition = (position) => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    
    // update this user's location in firebase
    db.ref(`/convoys/${this.props.children.props.convoy}/members/${this.props.children.props.uid}`).set({
        lat: position.coords.latitude,
        lng: position.coords.longitude
    });
  }
  
  handleError = (error) => {
    console.error(error);
  }

  //if geolocation is not available on browser
  componentDidMount() {
    if (!window.navigator.geolocation) {
      return alert("Geolocation is not supported by this browser.");
    }
    
    const options = {
      enableHighAccuracy: true
    };
    
    this.watchId = window.navigator.geolocation.watchPosition(
      this.updatePosition,
      this.handleError,
      options
    );
  }

  componentWillUnmount() {
    if (!window.navigator.geolocation || !this.watchId) return;
    window.navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    const { children } = this.props;

    var childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        latitude: this.state.latitude,
        longitude: this.state.longitude
      }));
        
    return <div>{childrenWithProps}</div>;
  }
}

export default GeolocationContainer;