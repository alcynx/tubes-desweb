import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="fixed w-64 bg-[#C4DAD2] min-h-screen p-5 flex flex-col justify-between">
            <div className="flex items-center mb-10">
                <img src="/images/logo-dark.png" alt="Staffio Logo" className="w-16 h-16 object-contain" />
            </div>
            <nav className="flex-grow">
                <ul className="flex flex-col space-y-8">
                    <li>
                        <NavLink
                            to="/DashboardHR"
                            className={({ isActive }) =>
                                `block p-4 text-center ${
                                    isActive ? "font-bold text-[#16423C]" : "font-light text-[#16423C] hover:font-bold"
                                }`
                            }
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/kelolaAbsenHr"
                            className={({ isActive }) =>
                                `block p-4 text-center ${
                                    isActive ? "font-bold text-[#16423C]" : "font-light text-[#16423C] hover:font-bold"
                                }`
                            }
                        >
                            PRESENSI
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/daftarpengajuan"
                            className={({ isActive }) =>
                                `block p-4 text-center ${
                                    isActive ? "font-bold text-[#16423C]" : "font-light text-[#16423C]"
                                }`
                            }
                        >
                            PENGAJUAN
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/DataPegawai"
                            className={({ isActive }) =>
                                `block p-4 text-center ${
                                    isActive ? "font-bold text-[#16423C]" : "font-light text-[#16423C] hover:font-bold"
                                }`
                            }
                        >
                            DATA PEGAWAI
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboardPengumuman"
                            className={({ isActive }) =>
                                `block p-4 text-center ${
                                    isActive ? "font-bold text-[#16423C]" : "font-light text-[#16423C] hover:font-bold"
                                }`
                            }
                        >
                            PENGUMUMAN
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/publikasi"
                            className={({ isActive }) =>
                                `block p-4 text-center ${
                                    isActive ? "font-bold text-[#16423C]" : "font-light text-[#16423C] hover:font-bold"
                                }`
                            }
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
