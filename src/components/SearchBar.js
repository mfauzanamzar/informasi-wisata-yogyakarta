import React from 'react'
import './SearchBar.css'

const SearchBar = ({handleChange, handleClick, handleKey, border}) => {
    return (
        <div className="searchbar">
            <input type="text" className="searchTerm" placeholder="Search..." onKeyPress={handleKey} onChange={handleChange} style={border}/>
            <button type="submit" className="searchButton" onClick={handleClick}><i class="fa fa-search"></i></button>
        </div>
    )
}

export default SearchBar
