import React from 'react'
import './SearchBar.css'

const SearchBar = ({handleChange, handleClick}) => {
    return (
        <div className="searchbar">
            <input type="text" className="searchTerm" placeholder="Search..." onChange={handleChange} />
            <button type="submit" className="searchButton" onClick={handleClick}><i class="fa fa-search"></i></button>
        </div>
    )
}

export default SearchBar
