import React, { useEffect, useState } from 'react';
import Blog from './Blog';



const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5005/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div class="pb-14" style={{backgroundColor:'#E3EAFF'}}>
            <h3 class="text-2xl py-6 flex justify-center our-story-p">OUR BLOG</h3>
            <div class="pt-14 mx-14 grid md:grid-cols-2 gap-4" >
            {
                blogs.map(blog=><Blog blog={blog}></Blog>)
            }
        </div>
        </div>
    );
};

export default Blogs;