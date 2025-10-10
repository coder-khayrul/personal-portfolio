import React from 'react';

const Button = ({children}) => {
    return (
        <button className='button-main animate-hover-btn tf-btn bg-main font-semibold text-white duration-600  text-[18px]'>{children}</button> 
    );
};

export default Button;