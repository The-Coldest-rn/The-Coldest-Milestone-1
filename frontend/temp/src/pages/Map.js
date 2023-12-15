import React, { useState, useEffect } from 'react';
import {
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';

const Map = withGoogleMap((props) => {
    const { searchBox, searchBoxPlaces, handlePlacesChanged } = props;

    // Check if google is defined before using it
    if (typeof google === 'undefined') {
        return null; // or any other fallback or loading mechanism
    }

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        >
            <StandaloneSearchBox
                ref={(ref) => searchBox(ref)}
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
});

function MapPage() {
    const [searchBox, setSearchBox] = useState(null);
    const [searchBoxPlaces, setSearchBoxPlaces] = useState([]);

    const handlePlacesChanged = () => {
        const places = searchBox.getPlaces();
        setSearchBoxPlaces(places);
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAPHbuBIGROvAsy7fvE_H0bzk5ZgEh_1kU&v=3.exp&libraries=geometry,drawing,places`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
            window.google = window.google || {};
            window.initMap = () => {
                // You can put any additional initialization logic here
            };
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div>
            <h1>Map</h1>
            <Map
                containerElement={<div style={{ height: '500px', width: '500px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
                searchBox={(map) => setSearchBox(map)}
                searchBoxPlaces={searchBoxPlaces}
                handlePlacesChanged={handlePlacesChanged}
            />
        </div>
    );
}

export default MapPage;