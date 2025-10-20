import React from 'react';

const SectionHeader = ({title,description}) => {
    return (
        <div className="text-center mb-16 animate-fade-in-up">
            <h2
                className="text-5xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                    backgroundImage: "linear-gradient(90deg, #FB2C36 20%, #292929)",
                }}
            >
                {title}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;