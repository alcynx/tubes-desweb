import React from "react";
import { NavLink } from "react-router-dom";

const SidebarPegawai = () => {
  return (
    <>
      <aside className="w-64 bg-primary min-h-screen p-5 flex flex-col justify-between">
        <div className="flex items-center mb-10">
          <img
            src="/images/logo-dark.png"
            alt="Staffio Logo"
            className="w-16 h-16 object-contain"
          />
        </div>
        <nav className="flex-grow">
          <ul className="flex flex-col space-y-8">
            <li>
              <NavLink
                to="/dashboardPe"
                className={({ isActive }) =>
                  isActive
                    ? "text-tertiary font-bold block p-4 text-center rounded-lg"
                    : "text-tertiary font-normal hover:font-bold block p-4 text-center rounded-lg"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/PresensiPegawai"
                className={({ isActive }) =>
                  isActive
                    ? "text-tertiary font-bold block p-4 text-center rounded-lg"
                    : "text-tertiary font-normal hover:font-bold block p-4 text-center rounded-lg"
                }
              >
                PRESENSI
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/FormPengajuan"
                className={({ isActive }) =>
                  isActive
                    ? "text-tertiary font-bold block p-4 text-center rounded-lg"
                    : "text-tertiary font-normal hover:font-bold block p-4 text-center rounded-lg"
                }
              >
                PENGAJUAN
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/PengumumanPegawai"
                className={({ isActive }) =>
                  isActive
                    ? "text-tertiary font-bold block p-4 text-center rounded-lg"
                    : "text-tertiary font-normal hover:font-bold block p-4 text-center rounded-lg"
                }
              >
                PENGUMUMAN
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SidebarPegawai;