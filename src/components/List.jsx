import React from 'react';
import image1 from '../assets/mobile.jpg';
import arrow from '../assets/rightarrow.png';
import bgImage from '../assets/bg.jpeg'; 

const List = () => {
    return (
        <div className="relative px-36 py-16 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0"></div>

            <div className="relative z-10">
                <div>
                    <h1 className='text-4xl text-white text-center font-bold mb-10'>
                        Lorem Ipsum is simply dummy text of the printing <br />
                        and typesetting industry.
                    </h1>
                    <p className='text-white text-center text-xl mb-12'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br />
                        industry's standard dummy text ever since the 1500s,
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-white px-6 py-8">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center 
                            ${index === 4 ? 'lg:col-start-2' : ''}`}
                        >
                            <img src={image1} alt="" className="w-16 h-16 rounded-4xl mb-4" />
                            <p className="mb-2 text-center">Mobile Game Development</p>
                            <img src={arrow} alt="" className="w-10 h-10" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default List;
