import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12 info '>
            <InfoCard cardTitle="Opening Hours" cardText="Available from 8.00 Am - 6.00 Pm" bg="bg-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit our location" cardText="Brooklyn, NY 10036, United States" bg="bg-secondary" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact us now" cardText="+000 123 456789" bg="bg-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;