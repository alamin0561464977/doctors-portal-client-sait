import React from 'react';
import appointment from '../../assets/images/appointment.png';

const HomeContactUs = () => {
    return (
        <div class="hero py-10" style={{
            background: `url(${appointment})`
        }}>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#ffff]">
                <div class="card-body">
                    <div class="form-control">
                        <input type="text" placeholder="Email Address" class="input input-bordered text-[#ffff]" />
                    </div>
                    <div class="form-control">
                        <input type="text" placeholder="Subject" class="input input-bordered text-[#ffff]" />
                    </div>
                    <div class="form-control">
                        <textarea type="text" placeholder="Your message" class="input input-bordered text-[#ffff]" />
                    </div>
                    <div class="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContactUs;