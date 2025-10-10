import React from 'react';
import Container from './ui/Container';
import bgGif from '../assets/image/bg.gif';
import Button from './ui/Button';
const Hero = () => {
    return (
        <div className='mt-[-120px] h-[calc(100vh_+_120px)]'>
            <div
                className="hero h-full"
                style={{
                    backgroundImage:
                        `url(${bgGif})`,
                    backgroundAttachment: "fixed"

                }}
            >
                <div className="hero-overlay"></div>
                <Container>
                    <div className="w-full mb-[-120px]">
                        <div className="w-full lg:w-1/2">
                            <h6 className=" text-xl font-medium text-main">Hello there</h6>
                            <h2 className='text-white text-[35px]  md:text-[55px] xl:text-[60px] font-bold '>I'm Khayrul Islam</h2>
                            <h3 className='text-main  text-[30px] md:text-[50px] xl:text-[60px] font-bold mb-2'>A Web Developer</h3>
                            <p className="mb-8 md:mb-15 text-gray-400 text-[15px] md:text-lg">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <Button>Hire Me</Button>
                        </div>
                    </div>
                </Container>

            </div>
        </div>
    );
};

export default Hero;