import React from "react";
import { Link } from 'react-router-dom';


const HeaderPegawai = ({ onProfileClick }) => {

    return (
        <>
            <header className="flex justify-between items-center bg-white p-6">
                <h1 className="text-xl font-normal font-poppins text-secondary">Hi, Nabila</h1>
                <div className="flex items-center">
                    <Link to="/editProfile">
                    <img
                        src="/images/PhotoPegawai.png"
                        alt="Profile"
                        className="w-12 h-12 rounded-full ml-6 object-contain cursor-pointer"
                        onClick={onProfileClick} 
                    />
                    </Link>
                </div>
            </header>
        </>
    );
};

export default HeaderPegawai;