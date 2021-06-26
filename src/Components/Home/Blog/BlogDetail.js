import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer';



const BlogDetail = () => {
    const { id } = useParams();
    const [blogDetail, setBlogDetail] = useState();
    const blogData = blogDetail?.find((data) => data._id == id);
    console.log(blogData)

    useEffect(() => {
        fetch('https://fast-peak-49025.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogDetail(data))
    }, []);
    return (
        <div class="text-lg tracking-wide">
            <div class="p-10 ">
                <h2 class="text-4xl text-center mb-10">{blogData?.name}</h2>
                <img class="float-right pl-8" src={blogData?.imageURL} alt="" />
                <p class="m-4">{blogData?.shotDescription}</p>
                <h2 class="text-3xl m-4 text-gray-900">{blogData?.title}</h2>
                <p class="m-4 text-gray-500">{blogData?.description}</p>
            </div>
            <div class="p-10">
                <div class="flex justify-center mt-10" >
                    <p class="font-extrabold italic ">"Far far away, behind the word mountains, far from the <br /> countries Vokalia and Consonantia, there live the blind <br /> texts. Separated they live in Bookmarks."</p>
                </div>
                <div>
                    <h4 class="text-2xl font-bold mt-10">The bedding was hardly able to cover it</h4>
                </div>
                <div class="p-14">
                    <img class="float-left w-72 p-6" src="https://a6e8z9v6.stackpathcdn.com/akea/wp-content/uploads/2018/11/eberhard-grossgasteiger-1093164-unsplash-600x900.jpg" alt="" />
                    <div class="md:mr-28 ">
                        <p >The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.</p>
                        <br />
                        <p><b> “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human” </b> although a little too small, lay peacefully between its four</p>
                        <br />
                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                        <br />
                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>

                    </div>
                </div>
                <div >
                    
                    <Link class="text-red-700" to="/">Previous Post</Link>
                    
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default BlogDetail;