import React from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';

const Recent = () => {
    const images = [image1, image2, image3, image4, image5, image6];

    return (
        <div className=" px-36 py-32 bg-black text-white">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-4">Our Recent Projects</h1>
                <p className="text-lg text-gray-300">
                    Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry.
                </p>
            </div>

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-4">
                    <img src={images[0]} alt="Project 1" className="w-full h-60 object-cover rounded-3xl shadow-md" />
                </div>
                <div className="col-span-12 md:col-span-4">
                    <img src={images[1]} alt="Project 2" className="w-full h-60 object-cover rounded-3xl shadow-md" />
                </div>
                <div className="col-span-12 md:col-span-4">
                    <img src={images[2]} alt="Project 3" className="w-full h-60 object-cover rounded-3xl shadow-md" />
                </div>

                <div className="col-span-12 md:col-span-3">
                    <img src={images[3]} alt="Project 4" className="w-full h-60 object-cover rounded-3xl shadow-md" />
                </div>
                <div className="col-span-12 md:col-span-4">
                    <img src={images[4]} alt="Project 5" className="w-full h-60 object-cover rounded-3xl shadow-md" />
                </div>
                <div className="col-span-12 md:col-span-5">
                    <img src={images[5]} alt="Project 6" className="w-full h-60 object-cover rounded-3xl shadow-md" />
                </div>
            </div>

            <div className="flex justify-center mt-14">
                <button className='text-white bg-stone-800 px-8 py-3 rounded-xl text-2xl bold hover:underline'>SEE ALL</button>
            </div>

        </div>
    );
};

export default Recent;
