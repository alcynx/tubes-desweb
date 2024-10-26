import React from "react";
import { IoMdSettings } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";

const HeaderHR =() => {
    return (
        <>
            <header className="flex justify-between items-center bg-white p-6 shadow-md">
                <h1 className="text-xl font-normal">Hi, Zielielie</h1>
                <div className="flex items-center">
                    <div className="flex items-center space-x-8 mr-32">
                        <button className="text-gray-500">
                            <IoMdSettings style={{ color: '#417D7A', fontSize: '32px' }}/>
                        </button>
                        <button className="text-gray-500">
                            <MdEmail style={{ color: '#417D7A', fontSize: '32px' }} />
                        </button>
                        <button className="text-gray-500">
                            <MdNotificationsActive style={{ color: '#417D7A', fontSize: '32px' }} />
                        </button>
                    </div>
                    <img src="/images/PhotoHr.jpeg" alt="Profile" className="w-10 h-10 rounded-full ml-6 object-contain" />
                </div>
            </header>
        </>
    );
};

export default HeaderHR;