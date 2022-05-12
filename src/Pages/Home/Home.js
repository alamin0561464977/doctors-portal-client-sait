import React from 'react';
import Banner from './Banner';
import './Home.css'
import InfoCard from './InfoCard';
import OurServices from './OurServices';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;