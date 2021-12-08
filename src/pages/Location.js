import React, { useState } from 'react'
import AllMaps from '../components/AllMaps'
import SearchBar from '../components/SearchBar'
import {usePosts} from "../custom-hooks";
import './Location.css'

const Location = () => {

    const style = { height: '100vh', width: '100wh' }
    const [input, setInput] = useState("")
    const [click, setClick] = useState("")

    
    const handleChange = event => {
        setClick(event.target.value);
    };
    function handleClick(e) {
        e.preventDefault();
        setInput(click)
    }


    return (
        <div className="location">
            <div className="location__searchbar">
                <SearchBar handleChange={handleChange} handleClick={handleClick}/>
            </div>
            <div className="location__map">
                <AllMaps style={style} setInput={setInput} input={input}/>
            </div>
        </div>
    )
}

export default Location
