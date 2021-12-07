import React from 'react'
import Maps from '../components/Maps'
import SearchBar from '../components/SearchBar'
import './Location.css'

const Location = () => {
    const style={ height: '100vh', width: '100wh'}
    return (
        <div className="location"> 
            <div className="location__map">
                <Maps style={style}/>
            </div>                       
            <div className="location__searchbar">
                <SearchBar/>
            </div>
        </div>
    )
}

export default Location
