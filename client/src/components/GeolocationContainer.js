import React, { Component } from 'react';

class GeolocationContainer extends Component {
  state = {
    currentPosition: null
  };

  updatePosition = (currentPosition) => {
    console.log("updating position: " + JSON.stringify(currentPosition));
    this.setState({ currentPosition });
  }

  componentDidMount() {
    if (!window.navigator.geolocation) {
      return alert("Geolocation is not supported by this browser.");
    }
    
    this.watchId = window.navigator.geolocation.watchPosition(this.updatePosition);
  }

  componentWillUnmount() {
    if (!window.navigator.geolocation || !this.watchId) return;
    window.navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    const { children } = this.props;

    var childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { currentPosition: this.state.currentPosition }));
        
    return <div>{childrenWithProps}</div>;
  }
}

export default GeolocationContainer;