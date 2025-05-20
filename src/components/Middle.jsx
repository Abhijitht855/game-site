import React from 'react';
import spiderman from '../assets/spiderman.jpg';

const Middle = () => {
  return (
    <div className="px-36 py-16 w-full h-[1000px] bg-gradient-to-b from-black to-stone-900 text-white">
      <h1 className="text-3xl font-bold mb-8">Lorem Ipsum</h1>
      <p className="text-xl mb-24">
        Lorem Ipsum is simply dummy text of the printing and typesetting <br />
        industry. Lorem Ipsum has been the industry's standard dummy text <br />
        ever since the 1500s,
      </p>

      <img
        src={spiderman}
        alt="Spiderman"
        className="w-full h-[560px] rounded object-cover mb-2"
      />
    </div>
  );
};

export default Middle;
