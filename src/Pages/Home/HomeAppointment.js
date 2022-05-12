import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import appointment from '../../assets/images/appointment.png';

const HomeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center mt-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 m-2'>
                <h3 className='text-xl text-[#19D3AE] font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white my-5'>Make an Appointment Today</h2>
                <p className='text-white pr-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>
                <button className="btn btn-primary my-5">Get Started</button>
            </div>
        </section>
    );
};

export default HomeAppointment;