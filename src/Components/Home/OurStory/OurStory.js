import React from 'react';
import Fade from 'react-reveal/Fade';

const OurStory = () => {
    return (
        <>
            <div class="py-16 our-story grid grid-cols-1 md:grid-cols-2 gap-4 flex justify-center items-center">
                <Fade left>
                   <div>
                   <div className="p-14">
                        <p class="font-bold italic text-base our-story-p">Our Story</p>
                        <h1 class="mb-10 mt-6  text-4xl font-bold our-story-h1">Design Vintage <br /> Inspiration</h1>
                        <p class="mb-6 leading-relaxed font-medium text-sm our-story-p2">Whimsical and unpredictable, the retro style has lent its one-of-a-kind identity to logos, furniture items, designer clothing, vehicles, and many more. Get intrigued by our works? Browse for more surprises.</p>
                        <button class="text-white  py-2 rounded-lg  px-4" style={{ backgroundColor: '#7868E6' }}>READ MORE</button>
                    </div>
                   </div>
                </Fade>
                <Fade right>
                    <div>
                        <a href="https://ibb.co/G28Q2J8"><img class="our-story-img" src="https://i.ibb.co/J7Gj7dG/h1-s1-img2.png" alt="h1-s1-img2" border="0" /></a>
                    </div>
                </Fade>


            </div>
        </>
    );
};

export default OurStory;