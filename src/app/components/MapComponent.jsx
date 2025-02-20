"use client";

import { useState } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapComponent() {
    // Set default location to Viman Nagar, Pune
    const [viewport, setViewport] = useState({
        latitude: 18.5679, // Viman Nagar Latitude
        longitude: 73.9143, // Viman Nagar Longitude
        zoom: 12,
    });

    return (

        <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={viewport}
            onMove={(evt) => setViewport(evt.viewState)}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/light-v11"
            attributionControl={false}
        >

            <Marker latitude={18.5679} longitude={73.9143} >
                <span className="text-4xl">👦🏻</span>
            </Marker>
        </Map>

    );
}
