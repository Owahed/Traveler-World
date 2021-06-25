import React from 'react';
import { useHistory } from 'react-router-dom';

const Blog = ({blog}) => {
    const id = blog._id;

    const history = useHistory();
    const handelClick = (id) => {
        history.push(`/blog/${id}`)
    }
    return (
        <div class="" >
                
            <div>
                <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                            <img class="h-48 w-full object-cover md:h-full md:w-48" src={blog.imageURL} alt="Man looking at item at a store" />
                        </div>
                        <div class="p-8">
                            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{blog.title}</div>
                            <a  onClick={() => handelClick(id)}  class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{blog.name}</a>
                            <p class="mt-2 text-gray-500">{blog.shotDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;