import React from "react";
import "./Hero.css"
import SearchBar from "./SearchBar";

const HeroListWisata = ({handleChange, handleClick}) => {
    
    const border = {border : 'none'}
    return(
        <div className="hero-content">
            <div className="hero-wisata">
                <div className="hero_inner">
                    <h1 className="hero_title">Wisata Alam Yogyakarta</h1>
                    <p className="hero_tagline">Cari destinasi wisata favoritemu!</p>
                    <SearchBar border={border} handleChange={handleChange} handleClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}
    
export default HeroListWisata;