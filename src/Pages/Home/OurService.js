import React from 'react';

const OurService = ({ ourService }) => {

    return (
        <div className="card shadow-xl">
            <figure className="px-10 pt-10">
                <img src={ourService.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{ourService.title}</h2>
                <p>{ourService.paragraph}</p>
            </div>
        </div>
    );
};

export default OurService;