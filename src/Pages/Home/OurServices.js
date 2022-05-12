import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import OurService from './OurService';

const OurServices = () => {
    const ourServices = [
        {
            _id: "ADC_001",
            img: fluoride,
            title: "Fluoride Treatment",
            paragraph: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: "ADC_002",
            img: cavity,
            title: "Cavity Filling",
            paragraph: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: "ADC_003",
            img: whitening,
            title: "Teeth Whitening",
            paragraph: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ];
    return (
        <div className='mb-10'>
            <div className=''>
                <h1 className='text-center text-[#19D3AE] text-xl '><b>OUR SERVICES</b></h1>
                <h3 className='text-center text-2xl'>Services We Provide</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 mt-5'>
                {
                    ourServices.map(ourService => <OurService key={ourService._id} ourService={ourService}></OurService>)
                }
            </div>
        </div>
    );
};

export default OurServices;