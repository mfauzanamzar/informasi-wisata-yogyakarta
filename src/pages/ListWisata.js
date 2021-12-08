import React from "react";
import { Link } from "react-router-dom";
import HeroListWisata from "../components/HeroListWisata";
import {usePosts} from "../custom-hooks";
import "./ListWisata.css";

const ListWisata = () => {
    const [posts, isLoading] = usePosts();
    console.log(posts)

    if(isLoading) return(
        <div className="content-wisata">
            <HeroListWisata/>
            <h1>Please wait... </h1>
            <div className="wisata">
            {[1,2,3,4,5,6].map(n => (
                <div className="list-wisata">
                    <div className="wisata-pic-isLoading"/>
                    <p className="wisata-name">Wisata Alam</p>
                </div>
            ))}
            </div>
        </div>
    )
    return (
        <div className="content-wisata">
            <HeroListWisata/>
            <h1>Explore Wisata </h1>
            <div className="wisata">
                {posts.map((post) =>{
                    return(
                        <div className="list-wisata">
                            <img className="wisata-pic" src={post.fields.image.fields.file.url} alt={post.fields.name}/>
                            <Link className="wisata-name" key={post.fields.slug} to={post.fields.slug}>
                                <p>{post.fields.name}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListWisata;