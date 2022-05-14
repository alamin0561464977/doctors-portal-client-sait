import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([])
    console.log(services)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-[#19D3AE] text-xl'>Available Appointments on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;