import React from 'react';
import appointment from '../../assets/images/appointment.png';

const HomeContactUs = () => {
    return (
        <div className="hero py-10" style={{
            background: `url(${appointment})`
        }}>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#ECEEF2]">
                <div className="card-body">
                    <h1 className='text-center text-[#19D3AE] text-xl '><b>CONTACT US</b></h1>
                    <div className="form-control">
                        <input type="text" placeholder="Email Address" className="input input-bordered bg-[#3A4256] text-[#ffff]" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Subject" className="input input-bordered bg-[#3A4256] text-[#ffff]" />
                    </div>
                    <div className="form-control">
                        <textarea type="text" placeholder="Your message" className="input input-bordered bg-[#3A4256] text-[#ffff]" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-[#0C7592] text-[#ffff] text-xl">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContactUs;