import react, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./Maps.scss";

const mapStyles = {
    width: "60%",
    height: "60%",
    // margin:'10%',
    marginBottom:'90%'
};

export class Maps extends Component {
    render() {
        return (
            <div className="map">
                <Map
                    google={this.props.google}
                    zoom={12}
                    style={mapStyles}
                    initialCenter={{
                        lat: -1.2884,
                        lng: 36.8233,
                    }}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyA859xnP8vozdzShqB-v4-pDdRaSN9Eaqs",
})(Maps);
