import React, { useState, useRef } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import '../App.css';

const Map = withScriptjs(
    withGoogleMap(() => {
        const [searchBox, setSearchBox] = useState(null);
        const [searchBoxPlaces, setSearchBoxPlaces] = useState([]);
        const mapRef = useRef(null);

        const handlePlacesChanged = () => {
            const places = searchBox.getPlaces();
            setSearchBoxPlaces(places);

            if (mapRef.current && places.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                places.forEach((place) => {
                    bounds.extend(place.geometry.location);
                });
                mapRef.current.fitBounds(bounds);
            }
        };

        return (
            <GoogleMap
                ref={mapRef}
                defaultZoom={10}
                defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // Set the default center to San Francisco, change as needed
            >
                <StandaloneSearchBox
                    ref={(ref) => setSearchBox(ref)}
                    onPlacesChanged={handlePlacesChanged}
                >
                    <input
                        type="text"
                        placeholder="Search for places"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            position: 'absolute',
                            left: '50%',
                            marginLeft: '-120px',
                        }}
                    />
                </StandaloneSearchBox>

                {searchBoxPlaces.map((place, index) => (
                    <Marker
                        key={index}
                        position={{
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng(),
                        }}
                        title={place.name}
                    />
                ))}
            </GoogleMap>
        );
    })
);

function MapPage() {
    return (
        <div>
            <h1>Map</h1>
            <div style={{ width: '100%', height: '500px' }}>
                <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAPHbuBIGROvAsy7fvE_H0bzk5ZgEh_1kU&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </div>
    );
}

export default MapPage;
