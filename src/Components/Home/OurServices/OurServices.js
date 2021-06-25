import React from 'react';
import './OurServices.css'

const OurServices = () => {
    return (
        <div className="">
        <div className="text-center py-12 our-story " >
            <h1 className="text-5xl ">Select Your Plan</h1>
            <p>No hidden fees, equipment rentals, or installation appointments.</p>
        </div>
        <div className="card-body">
            <div className="container md:flex">
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2 className="">01</h2>
                            <h3 className="">Design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, molestias expedita. Fuga nisi animi corporis.</p>
                            <a href="#">Select plan</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2 className="">02</h2>
                            <h3 className="text-2xl">Quality</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, molestias expedita. Fuga nisi animi corporis.</p>
                            <a href="#">Select plan</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2 className="">03</h2>
                            <h3 className="text-2xl">Customer </h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, molestias expedita. Fuga nisi animi corporis.</p>
                            <a href="#">Select plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
};

export default OurServices;