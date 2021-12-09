import React from "react";
import "./Hero.css"
import SearchBar from "./SearchBar";

const HeroListWisata = () => {
    
    const border = {border : 'none'}
    return(
        <div className="hero-content">
            <div className="hero-wisata">
                <div className="hero_inner">
                    <h2 className="hero_title">Wisata Alam Yogyakarta</h2>
                    <p className="hero_tagline">Cari destinasi wisata favoritemu!</p>
                    <SearchBar border={border}/>
                </div>
            </div>
        </div>
    )
}
    
export default HeroListWisata;