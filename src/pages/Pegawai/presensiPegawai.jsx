import React, { useState, useEffect } from "react";  
import HeaderPegawai from "../../components/DashboardPegawai/HeaderPegawai";
import SidebarPegawai from "../../components/DashboardPegawai/SidebarPegawai";
import FilterHr from "../../components/DashboardHr/filterdashboard";
import Kalender from "../../components/DashboardHr/kalender";
import AttendanceTable from "../../components/DashboardPegawai/TabelPresensiPegawai";
import UpdateEmployeeAttendanceButton from "../../components/DashboardPegawai/attendanceButtonPegawai"; 
import { useEmployeeAttendance } from '../../components/DashboardPegawai/attendanceData';

function PresensiPegawai() {
    const [selectedFilter, setSelectedFilter] = useState("");  
    const { employeeAttendanceData } = useEmployeeAttendance();
    const [filteredData, setFilteredData] = useState(employeeAttendanceData);  

    const statusData = [
        { id: 'Hadir', label: 'Hadir', color: '#417D7A' },
        { id: 'Izin/Sakit', label: 'Izin/Sakit', color: '#2661A7' },
        { id: 'Terlambat', label: 'Terlambat', color: '#E5E558' },
        { id: 'Absen', label: 'Absen', color: '#E56060' },
    ];

    useEffect(() => {
        if (selectedFilter === "") {
            setFilteredData(employeeAttendanceData);  
        } else {
            setFilteredData(
                employeeAttendanceData.filter(item => item.status === selectedFilter)
            );
        }
    }, [selectedFilter, employeeAttendanceData]);

    const handleDateChange = (date) => {
        const formattedDate = new Date(date);
        const formattedDateString = `${String(formattedDate.getDate()).padStart(2, '0')}/${String(formattedDate.getMonth() + 1).padStart(2, '0')}/${String(formattedDate.getFullYear()).slice(-2)}`;

        const filteredByDate = employeeAttendanceData.filter(item => item.date === formattedDateString);
        setFilteredData(filteredByDate);
    };

    return (
        <div className="flex min-h-screen h-full font-poppins">
            <SidebarPegawai />
            <div className="flex-1 p-6 ml-64 font-poppins">
                <HeaderPegawai />
                
                <section className="bg-white p-6 rounded-lg shadow-md my-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                            <h2 className="text-lg font-bold mb-4 text-tertiary">Overview Attendance</h2>
                            <div className="flex justify-between mb-4 text-tertiary">
                                <div className="flex space-x-4">
                                    <FilterHr onFilterChange={setSelectedFilter} />
                                    <Kalender onDateChange={handleDateChange} />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start space-y-4 pl-10">
                            <h3 className="text-lg font-bold font-poppins text-tertiary pl-20">
                                Mulai Untuk Presensi Harian
                            </h3>
                            <div className="pl-16">
                                <UpdateEmployeeAttendanceButton />
                            </div>
                        </div>
                    </div>

                    <AttendanceTable attendanceData={filteredData} />
                </section>
            </div>
        </div>
    );
}

export default PresensiPegawai;