import React from 'react'
import image1 from '../assets/game1.jpg';
import image2 from '../assets/game2.jpg';
import image3 from '../assets/game3.jpg';
import image4 from '../assets/game4.jpg';
import flame from '../assets/fire.png';


const Trending = () => {
  return (
    <div className='px-36 py-16 max-w-full bg-black'>
      <div className='flex justify-between items-center mb-16'>
        <h1 className="text-4xl font-bold text-white">Currently Trending Games</h1>
        <button className="text-white bg-stone-800 px-8 py-3 rounded-xl text-2xl bold hover:underline">SEE ALL</button>
      </div>

      <div className='flex justify-between gap-6 flex-wrap'>
        {[image1, image2, image3, image4].map((img, idx) => (
          <div
            key={idx}
            className="w-64 flex-shrink-0  overflow-hidden"
          >
            <img
              src={img}
              alt={`Game ${idx + 1}`}
              className="w-full h-70 object-cover rounded-lg"
            />
            <div className='flex justify-center items-center gap-3 mt-5'>
              <img src={flame} alt="" className="w-10 h-10 mb-2" />
              <p className="text-white text-center py-2 font-medium text-2xl">40 Followers</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className='text-center mt-28 text-[40px] text-white leading-normal font-semibold'>Lorem Ipsum is simply dummy text of the <br />
          printing and typesetting industry.</p>
      </div>
    </div>
  )
}

export default Trending;
