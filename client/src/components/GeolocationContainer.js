import React, { Component } from 'react';

class GeolocationContainer extends Component {
  state = {
    currentPosition: null
  };

  updatePosition = (currentPosition) => {
    this.setState({ currentPosition });
  }

  componentDidMount() {
    if (!navigator.geolocation) {
      return alert("Geolocation is not supported by this browser.");
    }

    this.watchId = navigator.geolocation.watchPosition(this.updatePosition);
  }

  componentWillUnmount() {
    if (!navigator.geolocation || !this.watchId) return;
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    const { children } = this.props;

    var childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { currentPosition: this.state.currentPosition }));

    return <div>{childrenWithProps}</div>;
  }
}

export default GeolocationContainer;