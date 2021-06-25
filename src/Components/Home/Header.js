
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./Header.css";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


const Header = () => {
    return (
        <div className="header-body">


            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide><img  src="https://a6e8z9v6.stackpathcdn.com/akea/wp-content/uploads/2018/11/pexels-photo-871053-1000x486.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://a6e8z9v6.stackpathcdn.com/akea/wp-content/uploads/2018/11/pexels-photo-25284-1000x486.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://a6e8z9v6.stackpathcdn.com/akea/wp-content/uploads/2018/11/hugues-de-buyer-mimeure-335733-unsplash-1000x486.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://a6e8z9v6.stackpathcdn.com/akea/wp-content/uploads/2018/11/pexels-photo-442559-1000x486.jpeg" alt="" /></SwiperSlide>
                
            </Swiper>

        </div>
    );
};

export default Header;