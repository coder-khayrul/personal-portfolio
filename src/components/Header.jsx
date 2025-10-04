import React from 'react';
import Container from './ui/Container';
import { NavLink } from 'react-router';

const Header = () => {
    const navLinks = <>
    <li><a className='text-[18px] font-medium text-white hover:text-main duration-500' href="#about">About</a></li> 
    <li><a className='text-[18px] font-medium text-white hover:text-main duration-500' href="#education">Education</a></li> 
    <li><a className='text-[18px] font-medium text-white hover:text-main duration-500' href="#project">Project</a></li> 
    <li><a className='text-[18px] font-medium text-white hover:text-main duration-500' href="#contact">Contact</a></li> 
    </>
    return (
        <header className='py-4 sticky top-0 bg-second'>
            <Container>
                <div className="navbar bg-white/10 backdrop-blur-md border border-white/20 shadow-sm rounded-[50px] px-6">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {navLinks}
                            </ul>
                        </div>
                        <a className="text-3xl text-main font-bold">Khayrul <sapn className="text-white">Islam</sapn> </a>
                    </div>
                    <div className="navbar-end">
                        <ul className="menu menu-horizontal px-1  hidden lg:flex">
                            {navLinks}
                        </ul>
                        <button className='button-main animate-hover-btn tf-btn bg-main font-semibold text-white duration-600 ms-5  text-[18px]'>Hire Me</button>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;