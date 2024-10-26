// src/components/HeroSection.js
import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-between bg-white min-h-screen  px-8 py-12">
      {/* Left Section: Text Content */}
      <div className="max-w-md font-poppins">
        <h1 className="text-6xl text-tertiary font-bold -mt-2 mb-6 px-6 ml-6">STAFF.IO</h1>
        <p className="text-tertiary text-[15px] font-medium leading-relaxed mb-6 px-6 ml-6">
          Sistem kami menawarkan kemudahan dalam mengelola manajemen pegawai dan mengoptimalkan proses HR Anda.
          Dengan fitur yang intuitif, Anda dapat memantau kehadiran, cuti, dan lembur tanpa repot.
        </p>
        <span className="flex justify-center">
          <button className="bg-secondary text-white rounded-full px-6 py-3 w-[222px] text-lg shadow-md hover:bg-quaternary hover:text-tertiary hover:border-2 hover:border-tertiary transition duration-300">
            Masuk
          </button>
        </span>
      </div>

      {/* Right Section: Image */}
      <div className="hidden lg:block mb-8 mt-4">
        <img src="images/together.png" alt="Team Illustration" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Home
