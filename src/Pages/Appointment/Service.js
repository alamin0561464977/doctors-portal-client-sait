import React from 'react';

const Service = ({ service }) => {
    return (
        <div class="card w-auto bg-base-100 shadow-xl  lg:max-w-lg">
            <div class="card-body text-center">
                <h2 class="text-xl font-bold text-secondary">{service.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;