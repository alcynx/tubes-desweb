import React from "react";

const Sidebar = () => {
    return (
        <>
        {/* <aside className="w-64 bg-green-100 h-screen p-5">
            <div className="flex items-center mb-10">
            <img src="/img/Logo.png" alt="Staffio Logo" className="w-16 h-16" />
            </div>
            <nav>
            <ul>
                <li className="mb-4">
                <a href="#" className="text-green-600 font-semibold">Home</a>
                </li>
                <li className="mb-4">
                <a href="#" className="text-gray-600 hover:text-green-600">Presensi</a>
                </li>
                <li className="mb-4">
                <a href="#" className="text-gray-600 hover:text-green-600">Pengajuan</a>
                </li>
                <li className="mb-4">
                <a href="#" className="text-gray-600 hover:text-green-600">Data Pegawai</a>
                </li>
                <li className="mb-4">
                <a href="#" className="text-gray-600 hover:text-green-600">Pengumuman</a>
                </li>
            </ul>
            </nav>
        </aside> */}

        <aside className="w-64 bg-[#C4DAD2] h-screen p-5 flex flex-col justify-between">
        <div className="flex items-center mb-10">
            <img src="/img/Logo.png" alt="Staffio Logo" className="w-16 h-16" />
        </div>
        <nav className="flex-grow">
            <ul className="flex flex-col space-y-16"> {/* Menggunakan space-y untuk jarak antar item */}
            <li>
                <a href="#" className="text-green-600 font-semibold block p-4 text-center rounded-lg hover:bg-green-200">Home</a>
            </li>
            <li>
                <a href="#" className="text-gray-600 block p-4 text-center rounded-lg hover:bg-green-200 hover:text-green-600">Presensi</a>
            </li>
            <li>
                <a href="#" className="text-gray-600 block p-4 text-center rounded-lg hover:bg-green-200 hover:text-green-600">Pengajuan</a>
            </li>
            <li>
                <a href="#" className="text-gray-600 block p-4 text-center rounded-lg hover:bg-green-200 hover:text-green-600">Data Pegawai</a>
            </li>
            <li>
                <a href="#" className="text-gray-600 block p-4 text-center rounded-lg hover:bg-green-200 hover:text-green-600">Pengumuman</a>
            </li>
            </ul>
        </nav>
        </aside>
        </>
    );
  };
  
  export default Sidebar;
  