// Header.jsx

import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');

  const navItems = ['Home', 'About us', 'Portfolio', 'News'];

  return (
    <header className="bg-black text-white py-4 px-14">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide">LOGO</div>

        <button
          className="text-3xl lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-20 left-0 w-full bg-black text-center py-6 space-y-6 text-lg 
          lg:space-y-0 lg:static lg:flex lg:items-center lg:space-x-10 lg:w-auto`}
        >
          <nav className="lg:flex lg:items-center lg:space-x-10 lg:text-md">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={() => setActive(item)}
                className={`block lg:inline px-4 py-2 border-b-2 transition duration-200 ${
                  active === item
                    ? 'border-orange-400'
                    : 'border-transparent hover:border-gray-400'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#"
            className="inline-block px-6 py-2 bg-orange-400 rounded font-medium hover:bg-orange-500 transition duration-200"
          >
            Contact us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
