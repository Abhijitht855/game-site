import React from 'react';

const Connect = () => {
    return (
       <div className='bg-gradient-to-b from-black to-stone-900 px-36 py-20'>

            <div>
                <h1 className='text-4xl text-white font-semibold'>Lorem Ipsum</h1>
                <p className='text-white mt-8 leading-normal text-lg'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                    industry.
                </p>
            </div>

            <div className='flex items-center justify-between mt-24 bg-stone-900 p-10 rounded-2xl'>
                <div>
                    <h1 className='text-white text-4xl font-semibold'>Stay in the loop</h1>
                    <p className='text-white mt-8 leading-normal text-lg'>
                        Subscribe to receive the latest news and updates about TDA. <br />
                        We promise not to spam you!
                    </p>
                </div>

                <div className="relative w-full max-w-md">
                    <input
                        type="email"
                        placeholder="Enter email address"
                        className="w-full py-3 pr-32 pl-5 rounded bg-white text-gray-700 placeholder-gray-400 text-sm outline-none"
                    />
                    <button
                        className="absolute top-1/2 right-1.5 transform -translate-y-1/2 bg-orange-400 hover:bg-orange-700 text-white text-sm font-semibold px-6 py-2 rounded"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Connect;
