import React from "react";
import HeaderPegawai from "../../components/DashboardPegawai/HeaderPegawai";
import SidebarPegawai from "../../components/DashboardPegawai/SidebarPegawai";
import StatistikChart from "../../components/DashboardPegawai/StatistikPegawai";
import RealTimeClockWithDay from "../../components/DashboardHr/time";
import UpdateEmployeeAttendanceButton from "../../components/DashboardPegawai/attendanceButtonPegawai";
import AttendanceTable from "../../components/DashboardPegawai/TabelPresensiPegawai"; 
import { useEmployeeAttendance } from '../../components/DashboardPegawai/attendanceData';
import { announcements } from '../../components/LandingPage/pengumuman';

function DashboardPe() {
    const { employeeAttendanceData } = useEmployeeAttendance();
    const data = [
        { id: 'Hadir', label: 'Hadir', value: employeeAttendanceData.filter(item => item.status === 'Hadir').length, color: '#417D7A' },
        { id: 'Izin/Sakit', label: 'Izin/Sakit', value: employeeAttendanceData.filter(item => item.status === 'Izin/Sakit').length, color: '#2661A7' },
        { id: 'Terlambat', label: 'Terlambat', value: employeeAttendanceData.filter(item => item.status === 'Terlambat').length, color: '#E5E558' },
        { id: 'Absen', label: 'Absen', value: employeeAttendanceData.filter(item => item.status === 'Absen').length, color: '#E56060' },
    ];

    return (
        <>
            <div className="flex min-h-screen h-full font-poppins">
                <SidebarPegawai />
                <div className="flex-1 p-6">
                    <HeaderPegawai />
                    
                    {/* Bagian Statistik */}
                    <section className="p-6 rounded-lg bg-white">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold font-poppins text-tertiary">STATISTIK</h2>
                            <h3 className="text-base font-regular">
                                <RealTimeClockWithDay />
                            </h3>
                        </div>

                        {/* Bagian Utama dengan Grid */}
                        <div className="grid grid-cols-3 gap-6 items-center">
                            {/* Bagian Chart dan Card Statistik */}
                            <div className="col-span-2">
                                <StatistikChart data={data} />
                            </div>

                            {/* Bagian Tombol Presensi Harian */}
                            <div className="flex flex-col items-center space-y-4">
                                <h3 className="text-lg font-bold font-poppins text-tertiary">
                                    Mulai Untuk Presensi Harian
                                </h3>
                                <div>
                                    <UpdateEmployeeAttendanceButton />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Bagian Tabel Presensi dan Pengumuman */}
                    <section className="flex space-x-8 mt-6">
                        {/* Tabel Presensi Pegawai */}
                        <div className="w-2/3 bg-white p-6 rounded-lg">
                            <AttendanceTable attendanceData={employeeAttendanceData} /> 
                        </div>

                        {/* Card Pengumuman */}
                        <div className="w-1/3 bg-white p-6 rounded-lg ">
                            <h3 className="text-xl font-bold font-poppins text-tertiary mb-4">
                                PENGUMUMAN
                            </h3>
                            {announcements.slice(0, 2).map((announcement, index) => (
                                <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm border border-greenstat">
                                    <h4 className="font-poppins font-bold text-tertiary mb-1">{announcement.title}</h4>
                                    <p className="font-poppins text-tertiary text-sm mb-2">{announcement.description}</p>
                                    <div className="flex justify-end">
                                        <span className="font-poppins text-sm text-tertiary">{announcement.date}</span>
                                    </div>

                                </div>
                            ))}
                            <div className="flex justify-end mt-4">
                                <a href="/PengumumanPegawai" className="text-sm font-poppins font-bold text-tertiary hover:underline">
                                    Selengkapnya &gt;&gt;
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default DashboardPe;