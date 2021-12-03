import React from 'react'
import {useParams} from 'react-router-dom'
import useSinglePost from '../custom-hooks/useSinglePost'

const Detail = () => {
    const { slug } = useParams();
    const [post, isLoading] = useSinglePost(slug)
    console.log(post)
    return (
        <div>
            Halaman Detail
        </div>
    )
}

export default Detail
