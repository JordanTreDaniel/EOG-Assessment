import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAJ0NI7YsTubg7CShdoDb_GC3w3kkJCqAs",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const measurement = props.droneData.measurements[0];
  const droneLocation = measurement
    ? {
        lat: measurement.latitude,
        lng: measurement.longitude
      }
    : {
        lng: -95.3698,
        lat: 29.7604
      };
  return (
    <GoogleMap defaultZoom={6} center={droneLocation}>
      {props.isMarkerShown && (
        <Marker position={droneLocation} onClick={props.onMarkerClick} />
      )}
    </GoogleMap>
  );
});

class DroneMap extends React.PureComponent {
  state = {
    isMarkerShown: true
  };

  render = () => {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={null}
        droneData={this.props.droneData}
      />
    );
  };
}

export default DroneMap;
