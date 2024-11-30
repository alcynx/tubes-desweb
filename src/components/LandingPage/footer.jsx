import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
          {/* Logo Section */}
          <div className="flex text-[20px] flex-col items-center lg:items-start">
            <img src="/images/logo-light.png" alt="Staffio Logo" className="w-20 mb-4" />
            <p>Inovasi Kepegawaian</p>
            <span> untuk Era Digital.</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col text-lg p-3 items-center -ml-8 lg:items-start">
            <a href="#" className="hover:underline mb-2  ">Home</a>
            <a href="#fitur" className="hover:underline mb-2 ">Fitur</a>
            <a href="#pengumuman" className="hover:underline mb-2 ">Pengumuman</a>
            <a href="#tentang-kami" className="hover:underline mb-2 ">Tentang Kami</a>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center lg:items-end">
            <p className="mb-4 text-md ">Connect with us</p>
            <div className="flex text-lg space-x-4">
              <a href="#" className="hover:text-gray-300 text-[24px]">
              <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="hover:text-gray-300 text-[24px]">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="hover:text-gray-300 text-[24px]">
              <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="mt-4 flex justify-between pt-6 text-lg ">
          <span><p className="mt-2 ">©2024 Copyright by Staff.io</p></span>
          <div>
          <span><a href="#" className="hover:underline mr-6 ">Terms Of Service</a></span>
          <span> | </span>
          <span><a href="#" className=" hover:underline ml-6 ">Privacy Policy</a></span>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
