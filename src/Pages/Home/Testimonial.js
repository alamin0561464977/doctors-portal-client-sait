import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

const Testimonial = () => {
    return (
        <div className='pb-12'>
            <din>
                <p className='text-xl text-[#19D3AE] font-bold mt-10'>Testimonial</p>
                <h1 className='text-3xl mt-2 pb-12'>What Our Patients Says</h1>
            </din>
            <din className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='p-5 rounded-lg shadow-xl'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex mt-5 border-x-cyan-500 border-2 px-3 py-1' >
                        <img className='w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5' src={people1} alt="" />
                        <div className='mt-2'>
                            <h4>Winson Herry</h4>
                            <p className='text-xs'>It is a long established</p>
                        </div>
                    </div>
                </div>
                <div className='p-5 rounded-lg shadow-xl'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex mt-5 border-x-cyan-500 border-2 px-3 py-1' >
                        <img className='w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5' src={people2} alt="" />
                        <div className='mt-2'>
                            <h4>Winson Herry</h4>
                            <p className='text-xs'>California</p>
                        </div>
                    </div>
                </div>
                <div className='p-5 rounded-lg shadow-xl'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex mt-5 border-x-cyan-500 border-2 px-3 py-1' >
                        <img className='w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5' src={people3} alt="" />
                        <div className='mt-2'>
                            <h4>Winson Herry</h4>
                            <p className='text-xs'>The point of using</p>
                        </div>
                    </div>
                </div>
            </din>
        </div>
    );
};

export default Testimonial;