import react, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./Maps.scss";

const mapStyles = {
    width: "60%",
    height: "60%"
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
                        lat: 47.49801,
                        lng: 19.03991
                    }}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyA859xnP8vozdzShqB-v4-pDdRaSN9Eaqs",
})(Maps);
