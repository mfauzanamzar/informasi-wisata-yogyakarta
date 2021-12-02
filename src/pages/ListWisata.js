import React from "react";
import { Link } from "react-router-dom";
import HeroListWisata from "../components/HeroListWisata";
import {usePosts} from "../custom-hooks";
import "./ListWisata.css";

const ListWisata = () => {
    const [posts, isLoading] = usePosts();
    console.log(posts)

    if(isLoading) return(
        <h1>Loading</h1>
    )
    return (
        <div className="content-wisata">
            <HeroListWisata/>
            <h1>Explore Wisata </h1>
            <div className="wisata">
                {posts.map((post) =>{
                    return(
                        <div className="wisata-item">
                        <div className="list-wisata">
                            <img className="wisata-pic" src={post.fields.image.fields.file.url} alt={post.fields.name}/>
                            <Link className="wisata-name" key={post.fields.slug} to={post.fields.slug}>
                                <p>{post.fields.name}</p>
                            </Link>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListWisata;