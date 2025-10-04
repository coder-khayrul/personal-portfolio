import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center text-white p-4 text-[18px] bg-[#292929]">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-main'>Khayrul Islam</span> </p>
            </aside>
        </footer>
    );
};

export default Footer;