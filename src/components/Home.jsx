// Home.jsx

import React from 'react';
import svgImage from '../assets/joy_stick.svg';

const Home = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row justify-between px-12 md:px-36 py-16 gap-10">
      
      <div className="flex-1 flex flex-col items-start justify-start">
        <h1 className="text-xl font-bold text-orange-400 mb-6">3D Game Dev</h1>

        <p className="text-4xl md:text-6xl font-bold text-white leading-normal mb-6">
          Work that we <br />
          produce for our <br />
          clients
        </p>

        <p className="text-lg text-white mb-16 max-w-xl leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br /> standard.
        </p>

        <button className="bg-orange-400 text-white px-8 py-4 rounded-4xl hover:bg-orange-500 transition">
          Get More Details
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center -mt-10 md:-mt-48">
        <img src={svgImage} alt="Joystick" className="max-w-full w-[500px] h-auto" />
      </div>
    </div>
  );
};

export default Home;
