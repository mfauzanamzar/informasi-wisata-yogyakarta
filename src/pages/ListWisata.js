import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroListWisata from "../components/HeroListWisata";
import { usePosts } from "../custom-hooks";
import TextTruncate from 'react-text-truncate';
import "./ListWisata.css";

const ListWisata = () => {
    const [posts, isLoading] = usePosts();
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

    if (isLoading) return (
        <div className="content-wisata">
            <HeroListWisata />
            <div className="wisata-title-isLoading"></div>
            <div className="wisata">
                {[1, 2, 3, 4, 5, 6].map(n => (
                    <div>
                        <div className="wisata-pic-isLoading" />
                        <div className="wisata-name-isLoading"></div>
                    </div>
                ))}
            </div>
        </div>
    )
    return (
        <div className="content-wisata">
            <HeroListWisata
                handleChange={handleChange}
                handleClick={handleClick}
                handleKey={handleKey}
            />
            <h1 className="wisata-title">Explore Wisata </h1>
            <div className="wisata">
                {posts.filter((post) => {
                    if (setInput == "") {
                        return post
                    } else if (post.fields.name.toLowerCase().includes(input.toLowerCase())) {
                        return post
                    }
                }).map((post) => {
                    return (
                        <div className="list-wisata">
                            <img className="wisata-pic" src={post.fields.image.fields.file.url} alt={post.fields.name} />
                            <div className="list-desc">
                                <div className="wisata-name" >
                                    <p>{post.fields.name}</p>
                                </div>
                                <p className="wisata-desc">
                                    <TextTruncate
                                        line={7}
                                        element="p"
                                        truncateText="???"
                                        text={post.fields.description}
                                    />
                                </p>
                                <div className="wisata-button__container">
                                    <Link key={post.fields.slug} to={post.fields.slug}>
                                        <button className="wisata-button"><span>Lihat Detail</span></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListWisata;