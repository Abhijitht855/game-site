import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 pt-24 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-3xl font-bold mb-4">LOGO</h1>
            <p className="mb-6 text-gray-300 text-[16px] max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <span className="text-gray-400">@Logo</span>
          </div>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="font-semibold text-xl mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-300 text-[16px]">
              <li>Zeux</li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
            <p className="text-[16px] text-gray-300 max-w-xs mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="text-[16px]">+908 89097 890</p>
          </div>
        </div>

        <div className="flex flex-col justify-end h-full">
          <div className="flex space-x-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
              <div
                key={idx}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-orange-500 cursor-pointer transition"
              >
                <Icon className="text-black" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-sm text-gray-400">
          Copyright ® 2021 Lorem. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
