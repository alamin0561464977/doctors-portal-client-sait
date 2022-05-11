import React from 'react';
import chair from '../../assets/images/chair.png'
import './Home.css'

const Banner = () => {
    return (
        <div className="banner-size hero ">
            <div className="hero-content flex-col lg:flex-row-reverse p-3">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;