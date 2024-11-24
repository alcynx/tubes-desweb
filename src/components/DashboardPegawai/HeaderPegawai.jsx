import React from "react";
import { MdEmail } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";

const HeaderPegawai =() => {
    return (
        <>
            <header className="flex justify-between items-center bg-white p-6">
                <h1 className="text-xl font-normal font-poppins text-secondary">Hi, Zielielie</h1>
                <div className="flex items-center">
                    <div className="flex items-center space-x-12 mr-10">
                        <button className="text-gray-500">
                            <MdEmail style={{ color: '#417D7A', fontSize: '32px' }} />
                        </button>
                        <button className="text-gray-500">
                            <MdNotificationsActive style={{ color: '#417D7A', fontSize: '32px' }} />
                        </button>
                    </div>
                    <img src="/images/PhotoPegawai.png" alt="Profile" className="w-12 h-12 rounded-full ml-6 object-contain" />
                </div>
            </header>
        </>
    );
};

export default HeaderPegawai;