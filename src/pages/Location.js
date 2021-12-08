import React from 'react'
import AllMaps from '../components/AllMaps'
import SearchBar from '../components/SearchBar'
import {usePosts} from "../custom-hooks";
import './Location.css'

const Location = () => {

    const style = { height: '100vh', width: '100wh' }
    const [posts, isLoading] = usePosts();

    return (
        <div className="location">
            <div className="location__searchbar">
                <SearchBar />
            </div>
            <div className="location__map">
                <AllMaps style={style} />
            </div>
        </div>
    )
}

export default Location
