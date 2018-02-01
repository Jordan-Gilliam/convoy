import React from "react";
import Geolocation from "react-geolocation";

 class UpdateMap extends React.Component {
   constructor(props) {
     super(props);
   }
   getCurrentPosition = () => {
     console.log("getCurrentPosition fired");
   }
   render() {
    return (
    <Geolocation
      onSuccess={console.log()}
      render={({
        fetchingPosition,
        position: { coords: { latitude, longitude } = {} } = {},
        error,
        getCurrentPosition
      }) =>
        <div>
          <button onClick = {() => this.getCurrentPosition()}>Get Position</button>
          {error &&
            <div>
              {error.message}
            </div>}
          <pre>
            <div>latitude: {latitude}</div>
            <div>longitude: {longitude}</div>
          </pre>
        </div>}
    />
  );
   }
}

export default UpdateMap;
