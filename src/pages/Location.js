import React, { useState } from 'react'
import AllMaps from '../components/AllMaps'
import SearchBar from '../components/SearchBar'
import './Location.css'

const Location = () => {

    const style = { height: '80vh', width: '100%' }
    const [input, setInput] = useState("")
    const [click, setClick] = useState("")


    const handleChange = event => {
        setClick(event.target.value);
    };
    function handleClick(e) {
        e.preventDefault();
        setInput(click)
    }

    const handleKey = e => {
        if (e.key === "Enter") {
            handleClick(e)
        }
    }


    return (
        <div className="location">
            <div className="location__searchbar">
                <SearchBar
                    handleChange={handleChange} handleClick={handleClick}
                    handleKey={handleKey}
                />
            </div>
            <div className="location__map">
                <AllMaps
                    style={style}
                    setInput={setInput}
                    input={input}
                />
            </div>
        </div>
    )
}

export default Location
