import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const BlogDetail = () => {
    const { id } = useParams();
    const [blogDetail, setBlogDetail] = useState();
    const blogData = blogDetail?.find((data) => data._id == id);
    console.log(blogData)

    useEffect(() => {
        fetch('http://localhost:5005/blogs')
            .then(res => res.json())
            .then(data => setBlogDetail(data))
    }, []);
    return (
        <div>
            <h2>{blogData?.name}</h2>
            <img src={blogData?.imageURL} alt="" />
            <p>{blogData?.shotDescription}</p>
            <h2>{blogData?.title}</h2>
            <p>{blogData?.description}</p>
        </div>
    );
};

export default BlogDetail;