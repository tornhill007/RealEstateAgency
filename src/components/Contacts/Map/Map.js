import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import classes from './Map.module.css';

export class MapContainer extends React.Component {
    render() {
        return (
            <div className={classes.wrapperMap}>
            <Map className={classes.wrapperMap1} google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    {/*<div>*/}
                    {/*    <h1>{this.state.selectedPlace.name}</h1>*/}
                    {/*</div>*/}
                </InfoWindow>
            </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyA0fyIvyAabmy3ANmt_PY95W7oUyqZzPOM")
})(MapContainer)