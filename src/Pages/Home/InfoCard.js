import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const InfoCard = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-3  gap-5 my-12 text-[#ffff]'>
            <div className="card lg:card-side shadow-xl bg-gradient-to-r from-primary to-secondary">
                <figure><img className='h-16 mx-5 my-2' src={clock} alt="Album" /></figure>
                <div className="card-body p-5">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card lg:card-side shadow-xl bg-[#323848]">
                <figure><img className='h-16 mx-5 my-2' src={marker} alt="Album" /></figure>
                <div className="card-body p-5">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card lg:card-side shadow-xl bg-gradient-to-r from-primary to-secondary">
                <figure><img className='h-16 mx-5 my-2' src={phone} alt="Album" /></figure>
                <div className="card-body p-5">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </section>
    );
};

export default InfoCard;