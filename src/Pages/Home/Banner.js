import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import './Home.css';

const Banner = () => {
    return (
        <div className="my-12 hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse p-3">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="img" />
                <div className='p-5' style={{
                    background: `url(${bg})`,
                    backgroundSize: 'cover'
                }}>
                    <h1 className="text-5xl font-bold">Amin Dental Clinic</h1>
                    <p className="py-6">Dental Clinic covers all subspecialties for different age groups including children, adults and people of old age. It is equipped following high quality standards and infection control system using an electronic sterilization unit designed to fulfill hygiene and sterilization effectiveness. The hospitals dental clinic,

                    </p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-[#ffff] text-xl">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;