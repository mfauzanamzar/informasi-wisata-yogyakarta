import React from 'react'
import { useParams } from 'react-router-dom'
import Maps from '../components/Maps'
import useSinglePost from '../custom-hooks/useSinglePost'
import './Detail.css'

const Detail = () => {
    const { slug } = useParams();
    const [post, isLoading] = useSinglePost(slug)

    if (isLoading)
        return (
            <h1>Loading...</h1>
        )

    return (
        <div className="detail">
            <h1 className="detail__title">{post.name}</h1>
            <div className="detail__content">
                <div className="content__image">
                    <img src={post.image.fields.file.url} alt={post.name} />
                </div>
                <div className="content__description">{post.description}</div>
            </div>
            <div className="detail__map">
                <h2 className="map__title">Location</h2>
                <div className="map__location">
                    <Maps />
                </div>
            </div>
        </div>
    )
}

export default Detail
