import React, { useState } from 'react';

function Navbar() {
  const [activeLink, setActiveLink] = useState('#home'); // Default active link

  return (
    <nav className="flex bg-primary p-3 justify-between items-center sticky top-0 z-10">
      <div className="flex-shrink-0">
        {/* Menambahkan flex-shrink-0 agar logo tidak mengecil */}
        <img src="/images/logo-dark.png" alt="logo" className="h-[88px] p-3" />
      </div>
      <div className="font-poppins font-semibold">
        <ul className="flex text-md space-x-6 text-secondary mr-5">
          <li>
            <a
              href="#home"
              onClick={() => setActiveLink('#home')}
              className={`${activeLink === '#home' ? 'text-tertiary' : ''} hover:text-tertiary`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#fitur"
              onClick={() => setActiveLink('#fitur')}
              className={`${activeLink === '#fitur' ? 'text-tertiary' : ''} hover:text-tertiary`}
            >
              Fitur
            </a>
          </li>
          <li>
            <a
              href="#pengumuman"
              onClick={() => setActiveLink('#pengumuman')}
              className={`${activeLink === '#pengumuman' ? 'text-tertiary' : ''} hover:text-tertiary`}
            >
              Pengumuman
            </a>
          </li>
          <li>
            <a
              href="#tentang-kami"
              onClick={() => setActiveLink('#tentang-kami')}
              className={`${activeLink === '#tentang-kami' ? 'text-tertiary' : ''} hover:text-tertiary`}
            >
              Tentang Kami
            </a>
          </li>
          <li>
            <a
              href="#footer"
              onClick={() => setActiveLink('#footer')}
              className={`${activeLink === '#footer' ? 'text-tertiary' : ''} hover:text-tertiary`}
            >
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
