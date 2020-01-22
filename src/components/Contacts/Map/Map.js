import React from 'react';
import classes from './Map.module.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import arrayContent, {currentAgency} from "../../../common/arrayContent";
import {NavLink} from "react-router-dom";

export class MapContainer extends React.Component {

    constructor(props) {
        super(props);
    }
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
        // let pathname = props.location.pathname.substr(1).split('/')[1];
        console.log(this.props.pathname);
        return (
            <Map className={classes.containerMap} google={this.props.google} zoom={14} style={!this.props.pathname ? {width: '124.8%', height: '87%'} : {width: '77.55%', height: '58%'} } >


                {/*{arrayContent.map(u => <Marker onClick={this.onMarkerClick} title={u.desc} key={u.id} name={u.location} position={{lat: u.marker[0], lng: u.marker[1] }} className={classes.wrapperBlock} />)}*/}
                {this.props.pathname ? <Marker onClick={this.onMarkerClick}
                                               title={arrayContent[this.props.pathname - 1].desc}
                                               name={arrayContent[this.props.pathname -1 ].location}
                                               position={{lat: arrayContent[this.props.pathname - 1].marker[0], lng: arrayContent[this.props.pathname - 1].marker[1]}} />
                : <Marker onClick={this.onMarkerClick}
                          title={currentAgency[0].desc}
                          name={currentAgency[0].location}
                          position={{lat: currentAgency[0].marker[0], lng: currentAgency[0].marker[1]}} />}

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


