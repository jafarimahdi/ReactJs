import react, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./Maps.scss";

const mapStyles = {
    // width: "100%",
    width: "70vw",
    height: "50%"
    // height: "350px",
    // overflowX: "hidden",
    // overflowY: "hidden"
};
const containerStyle = {
    maxWidth: "450px",
    height: "350px"
};

export class Maps extends Component {
    render() {
        return (
            
                <Map
                    google={this.props.google}
                    zoom={10}
                    resetBoundsOnResize={true}
                    style={mapStyles}
                    initialCenter={{
                        lat: 47.49801,
                        lng: 19.03991,
                    }}
                />
            
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyA859xnP8vozdzShqB-v4-pDdRaSN9Eaqs",
})(Maps);
