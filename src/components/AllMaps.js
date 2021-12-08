import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import L from "leaflet";
import { usePosts } from '../custom-hooks/'

const markerIcon = new L.Icon({
    iconUrl: '/marker.png',
    iconSize: [20, 30]
})


const AllMaps = ({ style, setInput, input }) => {

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

                {posts.filter((val)=>{
                      if (setInput == "") {
                        return val
                    } else if (val.fields.name.toLowerCase().includes(input.toLowerCase())) {
                        return val
                    }
                }).map((val) => {
                    let lat = val.fields.location.lat
                    let lon = val.fields.location.lon
                    return (
                        <div>
                            <Marker position={[lat, lon]} icon={markerIcon}>
                                <Popup>
                                    <p>{val.fields.name}</p>
                                    <a href={val.fields.link}>Lihat Rute di Google Map</a>
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
