import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation.js';
import '../map/map.css';

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}  
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
 
  render() {
    return (

      <div className="map">
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        
        {this.props.businesses.map((business, index) => {
          return <Marker key={index} id={index} position={{
            lat: business.latitude,  
            lng: business.longitude,
            index: index
          }}
          label={(index +1).toString()}
          
          onClick={this.onMarkerClick} name={business.name} />
         
        })}
        
        <Marker label={'current location'} />
        
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
      </div>
    );
  }
}



export default GoogleApiWrapper({
    apiKey: ("AIzaSyD0OFCmyfBx48a1aTe2ki0g-EVxyIJpZOQ")
  })(MapContainer)
  