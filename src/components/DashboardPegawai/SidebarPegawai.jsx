import React from "react";

const SidebarPegawai = () => {
    return (
        <>
            <aside className="w-64 bg-[#C4DAD2] min-h-screen p-5 flex flex-col justify-between">
                <div className="flex items-center mb-10">
                    <img src="/images/logo-dark.png" alt="Staffio Logo" className="w-16 h-16 object-contain" />
                </div>
                <nav className="flex-grow">
                    <ul className="flex flex-col space-y-8"> {/* Menggunakan space-y untuk jarak antar item */}
                    <li>
                        <a href="#" className="text-green-600 font-semibold block p-4 text-center rounded-lg hover:bg-green-200">HOME</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 block p-4 text-center rounded-lg hover:bg-green-200 hover:text-green-600">PRESENSI</a>
                    </li>
                    <li>
                        <a href="/FormPengajuan" className="text-gray-600 block p-4 text-center rounded-lg hover:bg-green-200 hover:text-green-600">PENGAJUAN</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 block p-4 text-center rounded-lg hover:bg-green-200 hover:text-green-600">PENGUMUMAN</a>
                    </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
  };
  
  export default SidebarPegawai;
  