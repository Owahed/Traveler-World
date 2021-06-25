import React from 'react';
import Blogs from './Blog/Blogs';
import Footer from './Footer';
import Headers from './Header';
import HeaderTheme from './HeaderTheme';
import ImageGallery from './ImageGallery/ImageGallery';
import OurServices from './OurServices/OurServices';
import OurStory from './OurStory/OurStory';


const Home = () => {
    return (
        <div>
            {/* <Headers/> */}
            <HeaderTheme/>
            <OurStory/>
            <Blogs/>
            <OurServices/>
            <ImageGallery/>
            <Footer/>
        </div>
    );
};

export default Home;