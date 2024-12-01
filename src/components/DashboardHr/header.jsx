import React from "react";

const HeaderHR =() => {
    return (
        <>
            <header className="flex justify-between items-center bg-white p-6">
                <h1 className="text-xl font-normal text-[#417D7A]">Hi, Zielielie</h1>
                <div className="flex items-center">
                    <img src="/images/PhotoHr.jpeg" alt="Profile" className="w-10 h-10 rounded-full ml-6 object-contain" />
                </div>
            </header>
        </>
    );
};

export default HeaderHR;