import React from 'react';
import Banner from './Banner';
import './Home.css'
import InfoCard from './InfoCard';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <InfoCard></InfoCard>
        </div>
    );
};

export default Home;