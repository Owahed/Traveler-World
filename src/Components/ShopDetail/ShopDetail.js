import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer';
import ShopDetailAll from './ShopDetailAll';
import Zoom from 'react-reveal/Zoom';

const ShopDetail = () => {
    const [shopDetail, setShopDetail] = useState([]);
    console.log(shopDetail)
    useEffect(() => {
        fetch('https://fast-peak-49025.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setShopDetail(data))
    }, [])
    return (
        <div>
            <div class="pb-14" style={{ backgroundColor: '#E3EAFF' }}>
        
        <div >
       {/* <img src="https://i.ibb.co/ZBM74n4/banner-photo.jpg" alt="banner-photo" border="0"/> */}
       <div class="flex justify-center items-center text-white h-auto"  style={{ backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        backgroundColor:'rgba(0,0,0, 0.4)',
        
            backgroundImage: `url("https://i.ibb.co/ZBM74n4/banner-photo.jpg" )` 
          }}>
           
           <div>
        <Zoom>
          <div>
          <div class="mb-16 ">
           <h2 class="text-6xl ">Travel Shop</h2>
           
           </div>
          </div>
        </Zoom>
      </div>
        </div>
        </div>
       
        <div class="pt-14 mx-14 grid md:grid-cols-3 gap-4" >
            {
                shopDetail.map(shop => <ShopDetailAll shop={shop}></ShopDetailAll>)
            }
        </div>
    
        
    </div>
    <Footer/>
        </div>
    );
};

export default ShopDetail;