import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const HeaderHR =() => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <header className="flex justify-between items-center bg-white p-6">
                <h1 className="text-xl font-normal text-[#417D7A]">Hi, Jason</h1>
                <div className="flex items-center">
                    <div
                    className="relative inline-block"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    >
                    <img
                        src="/images/PhotoHr.jpeg"
                        alt="Profile"
                        className="w-11 h-11 rounded-full ml-6 object-cover cursor-pointer"
                    />
                    {isHovered && (
                        <div className="absolute -right-4 mt-2 w-auto h-auto bg-white border border-tertiary rounded-md shadow-lg">
                        <div className="absolute top-[-8px] right-8 w-3 h-3 bg-white transform rotate-45 border-l border-t border-tertiary"></div>

                        <ul className="py-2 text-poppins">
                            <li>
                            <button
                                className="w-full text-left px-4 py-2 text-basic text-tertiary hover:bg-primary"
                                onClick={() => navigate("/editProfileHr")}
                            >
                                Edit Profile
                            </button>
                            </li>
                            <li>
                            <button
                                className="w-full text-left px-4 py-2 text-basic text-tertiary hover:bg-primary"
                                onClick={() => navigate("/login")}
                            >
                                Logout
                            </button>
                            </li>
                        </ul>
                        </div>
                    )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderHR;