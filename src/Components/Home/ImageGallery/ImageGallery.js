import React from 'react';
import './ImageGallery.css'



const ImageGallery = () => {
    return (
        <>  
        <h3 class="text-2xl my-10 flex justify-center our-story-p">OUR GALLERY</h3>
        <div class="flex justify-center items-center min-h-full" classNam="gallery-body">
            <div className="img-gallery-container">
                <div className="img-gallery-box">
                    <div className="img-bx">
                        <img src="https://a6e8z9v6.stackpathcdn.com/akea/wp-content/uploads/2018/11/luca-bravo-121932-unsplash-700x700.jpg" alt="" />
                    </div>
                    <div className="img-gallery-content">
                        <div>
                            <h2>Img Title</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae 
                                dolor impedit tempore quae inventore earum rem eaque molestias 
                                omnis quo.</p>
                        </div>
                    </div>
                </div>
                <div className="img-gallery-box">
                    <div className="img-bx">
                        <img src="https://a6e8z9v6.stackpathcdn.com/akea/wp-content/uploads/2018/11/pexels-photo-697313-700x700.jpeg" alt="" />
                    </div>
                    <div className="img-gallery-content">
                        <div>
                            <h2>Img Title</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae 
                                dolor impedit tempore quae inventore earum rem eaque molestias 
                                omnis quo.</p>
                        </div>
                    </div>
                </div>
                <div className="img-gallery-box">
                    <div className="img-bx">
                        <img src="https://a6e8z9v6.stackpathcdn.com/akea/wp-content/uploads/2018/11/pexels-photo-325807-700x700.jpeg" alt="" />
                    </div>
                    <div className="img-gallery-content">
                        <div>
                            <h2>Img Title</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae 
                                dolor impedit tempore quae inventore earum rem eaque molestias 
                                omnis quo.</p>
                        </div>
                    </div>
                </div>
                <div className="img-gallery-box">
                    <div className="img-bx">
                        <img src="https://a6e8z9v6.stackpathcdn.com/akea/wp-content/uploads/2018/11/luca-bravo-177552-unsplash-700x700.jpg" alt="" />
                    </div>
                    <div className="img-gallery-content">
                        <div>
                            <h2>Img Title</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae 
                                dolor impedit tempore quae inventore earum rem eaque molestias 
                                omnis quo.</p>
                        </div>
                    </div>
                </div>
                <div className="img-gallery-box">
                    <div className="img-bx">
                        <img src="https://a6e8z9v6.stackpathcdn.com/akea/wp-content/uploads/2018/11/pexels-photo-871053-700x700.jpeg" alt="" />
                    </div>
                    <div className="img-gallery-content">
                        <div>
                            <h2>Img Title</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae 
                                dolor impedit tempore quae inventore earum rem eaque molestias 
                                omnis quo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ImageGallery;