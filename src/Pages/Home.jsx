import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <div className='bg-second'>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;