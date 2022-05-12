import React from 'react';

const OurService = ({ ourService }) => {

    return (
        <div class="card shadow-xl">
            <figure class="px-10 pt-10">
                <img src={ourService.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{ourService.title}</h2>
                <p>{ourService.paragraph}</p>
            </div>
        </div>
    );
};

export default OurService;