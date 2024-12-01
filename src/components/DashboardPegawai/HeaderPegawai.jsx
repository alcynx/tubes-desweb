import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderPegawai = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // You can add your logout logic here (e.g., clearing tokens or user data)
    navigate("/login");
  };

  return (
    <>
      <header className="flex justify-between items-center bg-white p-6">
        <h1 className="text-xl font-normal font-poppins text-secondary">Hi, Nabila</h1>
        <div className="flex items-center">
          <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="/images/PhotoPegawai.png"
              alt="Profile"
              className="w-12 h-12 rounded-full ml-6 object-contain cursor-pointer"
            />
            {isHovered && (
              <div className="absolute -right-4 mt-2 w-auto h-auto bg-white border border-tertiary rounded-md shadow-lg">
                {/* Bubble Arrow */}
                <div className="absolute top-[-8px] right-8 w-3 h-3 bg-white transform rotate-45 border-l border-t border-tertiary"></div>

                <ul className="py-2 text-poppins">
                  <li>
                    <Link
                      to="/editProfile"
                      className="block px-4 py-2 text-basic text-tertiary hover:bg-primary rounded-md"
                    >
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      className="block px-4 py-2 text-basic text-tertiary hover:bg-primary rounded-md"
                      onClick={handleLogout}
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

export default HeaderPegawai;
