import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import L from "leaflet";
import { usePosts } from '../custom-hooks/'

const markerIcon = new L.Icon({
    iconUrl: '/marker.png',
    iconSize: [20, 30]
})


const AllMaps = ({ style }) => {

    const [posts, isLoading] = usePosts()

    if (isLoading) return <p>Loading...</p>
    return (
        <div className="maps">
            <MapContainer
                center={[-7.9023242, 110.257544]}
                zoom={10}
                style={style}
                scrollWheelZoom={false}>                
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {posts.map((post) => {
                    let lat = post.fields.location.lat
                    let lon = post.fields.location.lon
                    return (
                        <div>
                            <Marker position={[lat, lon]} icon={markerIcon}>
                                <Popup>
                                    <p>{post.fields.name}</p>
                                    <a href={post.fields.link}>Lihat Rute di Google Map</a>
                                </Popup>
                            </Marker>
                        </div>

                    )
                })}
            </MapContainer>
        </div>
    )
}

export default AllMaps
