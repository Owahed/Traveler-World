import React from 'react';
import Zoom from 'react-reveal/Zoom';

const HeaderTheme = () => {
    return (
        
        <div class="flex justify-center items-center text-white h-auto"  style={{ backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        backgroundColor:'rgba(0,0,0, 0.4)',
        
            backgroundImage: `url("https://i.ibb.co/4W4cxhK/beautiful-scenery-fog-covering-mountains-great-wallpaper-1.jpg" )` 
          }}>
           
           <div>
        <Zoom>
          <div>
          <div class="mb-16 ">
           <h2 class="text-5xl ">Top Amazing Places to Go in Summer</h2>
           <p>NOVEMBER 6, 2018PAUL NEWMAN</p>
           </div>
          </div>
        </Zoom>
      </div>
        </div>
    );
};

export default HeaderTheme;