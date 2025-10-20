import React from 'react';
import { Link } from 'react-router';

const Button = ({children,link}) => {
    return (
        <Link to={link ? link : "#"}>
            <button className='button-main animate-hover-btn tf-btn bg-main font-semibold text-white duration-600  text-[18px]'>{children}</button> 
        </Link>
    );
};

export default Button;