import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-[#C4DAD2] min-h-screen h-full p-5 flex flex-col justify-between">
            <div className="flex items-center mb-10">
                <img src="/images/logo-dark.png" alt="Staffio Logo" className="w-16 h-16 object-contain" />
            </div>
            <nav className="flex-grow">
                <ul className="flex flex-col space-y-16">
                    <li>
                        <NavLink 
                            to="/DashboardHR" 
                            exact 
                            className="text-[#16423C] block p-4 text-center" 
                            activeClassName="font-bold text-[#16423C]"
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/kelolaAbsenHr" 
                            className="text-[#16423C] block p-4 text-center" 
                            activeClassName="font-bold text-[#16423C]"
                        >
                            PRESENSI
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/daftarpengajuan" 
                            className="text-[#16423C] block p-4 text-center" 
                            activeClassName="font-bold"
                        >
                            PENGAJUAN
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/DataPegawai" 
                            className="text-[#16423C] block p-4 text-center" 
                            activeClassName="font-bold"
                        >
                            DATA PEGAWAI
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboardPengumuman" 
                            className="text-[#16423C] block p-4 text-center" 
                            activeClassName="font-bold"
                        >
                            PENGUMUMAN
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/publikasi" 
                            className="text-[#16423C] block p-4 text-center" 
                            activeClassName="font-bold"
                        >
                            PUBLIKASI
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
