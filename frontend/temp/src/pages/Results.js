import React, { useState, useRef } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import '../App.css';

const ResultsMap = withScriptjs(
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

        // Replace this with actual data from your backend
        const businesses = [
            { id: 1, name: 'Business 1', lat: -34.397, lng: 150.644 },
            { id: 2, name: 'Business 2', lat: -34.407, lng: 150.654 },
            // Add more businesses as needed
        ];

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

                {businesses.map((business) => (
                    <Marker
                        key={business.id}
                        position={{ lat: business.lat, lng: business.lng }}
                        title={business.name}
                    />
                ))}
            </GoogleMap>
        );
    })
);

function Results() {
    return (
        <div>
            <h1>Results</h1>
            {/* Use the ResultsMap component with the specified googleMapURL */}
            <ResultsMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAPHbuBIGROvAsy7fvE_H0bzk5ZgEh_1kU&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `500px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}

export default Results;
