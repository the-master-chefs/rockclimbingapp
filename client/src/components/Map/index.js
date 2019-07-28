import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.267,
      lng: -97.743
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '200px', width: '90%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCmTxqCT-b9y68N8RXOGe_HGy0LdEbkTeQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={30.2672}
            lng={97.7431}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;