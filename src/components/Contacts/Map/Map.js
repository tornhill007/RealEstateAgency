import React from 'react';
import classes from './Map.module.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import arrayContent from "../../../common/arrayContent";
import {NavLink} from "react-router-dom";

export class MapContainer extends React.Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });



    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };
    render() {

        return (
            <Map google={this.props.google} zoom={14} style={{width: '52.45%'}} >


                {arrayContent.map(u => <Marker onClick={this.onMarkerClick} title={u.desc} key={u.id} name={u.location} position={{lat: u.marker[0], lng: u.marker[1] }} className={classes.wrapperBlock} />)}
                {/*<Marker onClick={this.onMarkerClick}*/}
                {/*    title={'The marker`s title will appear as a tooltip.'}*/}
                {/*    name={'KEK'}*/}
                {/*    position={{lat: arrayContent[0].marker[0], lng: arrayContent[0].marker[1]}} />*/}

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>


                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        {/*<h1>{this.state.selectedPlace.name}</h1>*/}
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyA0fyIvyAabmy3ANmt_PY95W7oUyqZzPOM")
})(MapContainer)


