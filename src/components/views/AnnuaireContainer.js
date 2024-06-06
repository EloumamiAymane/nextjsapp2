
"use client";
import React, { useEffect, useState, useRef } from "react";
import {
    APIProvider,
    Map,
    useMap,
    AdvancedMarker
} from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import data from "../../data/data";

export default function AnnuaireContainer() {
    return (
        <div style={{ height: "70vh", width: "70%" ,margin:" 80px auto"}}>
            <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} region='MA'>
                <Map
                    defaultCenter={{lat: 33.53333, lng: -7.58333}}
                    defaultZoom={7}
                    mapId={process.env.NEXT_PUBLIC_MAP_ID}



                >
                    <Markers points={data}  />
                </Map>
            </APIProvider>
        </div>
    );
}

const Markers = ({ points }) => {
    const map = useMap();
    const [markers, setMarkers] = useState({});
    const clusterer = useRef(null);

    useEffect(() => {
        if (!map) return;
        if (!clusterer.current) {
            clusterer.current = new MarkerClusterer({ map });
        }
    }, [map]);

    useEffect(() => {
        clusterer.current?.clearMarkers();
        clusterer.current?.addMarkers(Object.values(markers));
    }, [markers]);

    const setMarkerRef = (marker, key) => {
        if (marker && markers[key]) return;
        if (!marker && !markers[key]) return;

        setMarkers(prev => {
            if (marker) {
                return { ...prev, [key]: marker };
            } else {
                const newMarkers = { ...prev };
                delete newMarkers[key];
                return newMarkers;
            }
        });
    };

    return (
        <>
            {points.map(point => (
                <AdvancedMarker
                    title="Laureat"

                    position={point}
                    key={point.key}
                    ref={marker => setMarkerRef(marker, point.key)}
                >
                    <span style={{ fontSize: "2rem" }}> 🎓</span>
                </AdvancedMarker>
            ))}
        </>
    );
};
// 👨🏼‍🎓
