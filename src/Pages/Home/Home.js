import React from 'react';
import Banner from './Banner';
import Exceptional from './Exceptional';
import './Home.css'
import HomeAppointment from './HomeAppointment';
import HomeContactUs from './HomeContactUs';
import InfoCard from './InfoCard';
import OurServices from './OurServices';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <OurServices></OurServices>
            <Exceptional></Exceptional>
            <HomeAppointment></HomeAppointment>
            <Testimonial></Testimonial>
            <HomeContactUs></HomeContactUs>
        </div>
    );
};

export default Home;