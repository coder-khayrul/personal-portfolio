import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Education from '../components/Education';

const Home = () => {
    return (
        <div className='bg-second'>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;