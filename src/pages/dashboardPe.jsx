import React from "react";
import HeaderPegawai from "../components/DashboardPegawai/HeaderPegawai";
import SidebarPegawai from "../components/DashboardPegawai/SidebarPegawai";
import StatistikChart from "../components/DashboardPegawai/StatistikPegawai";
import RealTimeClockWithDay from "../components/DashboardHr/time";
import UpdateEmployeeAttendanceButton from "../components/DashboardPegawai/attendanceButtonPegawai";
import AttendanceTable from "../components/DashboardPegawai/TabelPresensiPegawai"; 
import { useEmployeeAttendance } from '../components/DashboardPegawai/attendanceData';
import { announcements } from '../components/DashboardPegawai/pengumuman';

function DashboardPe() {
    // Mengambil data kehadiran dari konteks
    const { employeeAttendanceData } = useEmployeeAttendance();
    const data = [
        { id: 'Hadir', label: 'Hadir', value: employeeAttendanceData.filter(item => item.status === 'Hadir').length, color: '#417D7A' },
        { id: 'Izin/Sakit', label: 'Izin/Sakit', value: employeeAttendanceData.filter(item => item.status === 'Izin/Sakit').length, color: '#2661A7' },
        { id: 'Terlambat', label: 'Terlambat', value: employeeAttendanceData.filter(item => item.status === 'Terlambat').length, color: '#E5E558' },
        { id: 'Absen', label: 'Absen', value: employeeAttendanceData.filter(item => item.status === 'Absen').length, color: '#E56060' },
    ];

    return (
        <>
            <div className="flex min-h-screen h-full">
                <SidebarPegawai />
                <div className="flex-1 p-6 bg-gray-100">
                    <HeaderPegawai />
                    
                    {/* Bagian Statistik */}
                    <section className="p-6 rounded-lg my-6 bg-white shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold font-poppins text-greenstat">STATISTIK</h2>
                            <h3 className="text-base font-regular">
                                <RealTimeClockWithDay />
                            </h3>
                        </div>

                        <div className="flex items-center space-x-8">
                            {/* Bagian StatistikChart */}
                            <StatistikChart data={data} />

                            {/* Bagian Presensi Harian */}
                            <div className="flex flex-col items-start space-y-4 pl-24">
                                <h3 className="text-lg font-bold font-poppins text-greenstat pl-20">
                                    Mulai Untuk Presensi Harian
                                </h3>
                                <UpdateEmployeeAttendanceButton />
                            </div>
                        </div>
                    </section>

                    {/* Bagian Tabel Presensi dan Pengumuman */}
                    <section className="flex space-x-8 mt-6">
                        {/* Tabel Presensi Pegawai */}
                        <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
                            <AttendanceTable attendanceData={employeeAttendanceData} /> {/* Ganti dengan data yang sesuai */}
                        </div>

                        {/* Card Pengumuman */}
                        <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold font-poppins text-greenstat mb-4">
                                PENGUMUMAN
                            </h3>
                            {announcements.map((announcement, index) => (
                                <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm border border-greenstat">
                                    <h4 className="font-bold text-greenstat mb-1">{announcement.title}</h4>
                                    <p className="text-gray-600 text-sm mb-2">{announcement.description}</p>
                                    <span className="text-xs text-gray-400">{announcement.date}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default DashboardPe;
