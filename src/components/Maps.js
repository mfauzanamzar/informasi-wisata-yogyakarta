import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import L from "leaflet";

const markerIcon = new L.Icon({
    iconUrl: '/marker.png',
    iconSize: [20, 30]
})


const Maps = ({ style, lat, lon, name, link }) => {

    const position = [lat, lon]

    return (
        <div className="maps">
            <MapContainer
                center={position}
                zoom={16}
                scrollWheelZoom={false}
                style={style}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={markerIcon}>
                    <Popup>
                        <p>{name}</p>
                        <a href={link}>Buka Map</a>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Maps
