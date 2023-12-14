import React, { useState, useRef, useEffect } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import '../App.css';

const Map = withGoogleMap((props) => {
    const { searchBox, searchBoxPlaces, mapRef, handlePlacesChanged } = props;

    return (
        <GoogleMap
            ref={mapRef}
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

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAPHbuBIGROvAsy7fvE_H0bzk5ZgEh_1kU&v=3.exp&libraries=geometry,drawing,places`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
            // Initialization logic if needed
        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div>
            <h1>Map</h1>
            <div style={{ width: '100%', height: '500px' }}>
                <Map
                    searchBox={setSearchBox}
                    searchBoxPlaces={searchBoxPlaces}
                    mapRef={mapRef}
                    handlePlacesChanged={handlePlacesChanged}
                />
            </div>
        </div>
    );
}

export default MapPage;