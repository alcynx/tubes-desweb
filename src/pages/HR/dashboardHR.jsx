import React, { useState, useEffect } from "react";
import HeaderHR from "../../components/DashboardHr/header";
import Sidebar from "../../components/DashboardHr/sidebar";
import FilterHr from "../../components/DashboardHr/filterdashboard";
import Kalender from "../../components/DashboardHr/kalender";
import DownloadButton from "../../components/DashboardHr/download";
import AttendanceTable from "../../components/DashboardHr/tablepresensi";
import RealTimeClockWithDay from "../../components/DashboardHr/time";
import { useAttendance } from '../../components/DashboardHr/AttendanceContext';
import { formatDate } from "../../components/DashboardHr/formatdate";
import { FaUser, FaCheck, FaTimes, FaClock, FaCalendarAlt } from "react-icons/fa"; 
import { FaSearch } from "react-icons/fa";

function DashboardHr() {
    const { attendanceData } = useAttendance();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [filteredData, setFilteredData] = useState(attendanceData);

    const calculateFilteredStats = (data) => {
        const hadir = data.filter((item) => item.status === 'Hadir').length;
        const terlambat = data.filter((item) => item.status === 'Terlambat').length;
        const absen = data.filter((item) => item.status === 'Absen').length;
        const izinCuti = data.filter((item) => item.status === 'Izin' || item.status === 'Cuti').length;

        return [
            { label: 'Hadir', value: hadir },
            { label: 'Terlambat', value: terlambat },
            { label: 'Absen', value: absen },
            { label: 'Izin/Cuti', value: izinCuti },
        ];
    };

    const totalKaryawan = new Set(attendanceData.map((item) => item.name)).size;

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const handleDateSearch = (searchDate) => {
        const formattedSearchDate = formatDate(searchDate); 
        const filteredData = attendanceData.filter(item => item.date === formattedSearchDate);
        setFilteredData(filteredData);
    };
    

    const handleDateChange = (date) => {
        setSelectedDate(date);
        handleDateSearch(date);
    };

    const filteredAttendanceData = attendanceData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 10)
        .filter((item) => {
            const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = selectedFilter ? item.status === selectedFilter : true;
            const matchesDate = selectedDate ? formatDate(selectedDate) === item.date : true;
            return matchesSearchTerm && matchesFilter && matchesDate;
        });

    const filteredStats = calculateFilteredStats(attendanceData);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6">
                <HeaderHR />
                <section className="p-6 rounded-lg my-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold text-[#16423C]">HR ATTENDANCE</h2>
                        <h3 className="text-lg regular text-[#417D7A]">
                            <RealTimeClockWithDay />
                        </h3>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                         {/* Total Karyawan */}
                         <div className="text-center flex flex-col items-left p-4 bg-white border border-[#417D7A] rounded-md shadow-sm">
                            <FaUser className="text-xl text-[#16423C] mb-2" /> 
                            <p className="text-gray-600 text-[#417D7A] text-left">Karyawan</p>
                            <p className="text-2xl font-bold text-[#16423C] text-left">{totalKaryawan}</p>
                        </div>

                        {filteredStats.map((stat, index) => (
                            <div key={index} className="text-center flex flex-col items-left p-4 bg-white border border-[#417D7A] rounded-md shadow-sm">
                                {stat.label === "Hadir" && <FaCheck className="text-xl text-[#16423C] mb-2" />}
                                {stat.label === "Terlambat" && <FaClock className="text-xl text-[#16423C] mb-2" />}
                                {stat.label === "Absen" && <FaTimes className="text-xl text-[#16423C] mb-2" />}
                                {stat.label === "Izin/Cuti" && <FaCalendarAlt className="text-xl text-[#16423C] mb-2" />}
                                
                                <p className="text-[#417D7A] text-left">{stat.label}</p>
                                <p className="text-2xl font-bold text-[#16423C] text-left">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-md my-6">
                    <h2 className="text-lg font-bold mb-4 text-[#16423C]">Overview Attendance</h2>
                    <div className="flex justify-between mb-4 text-[#16423C]">
                        <div className=" flex space-x-4"> 
                            <div className="relative ">
                                < input 
                                    type="text"
                                    placeholder="Search"
                                    className="p-2 px-9 border rounded-lg border border-tertiary"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-tertiary"/>
                            </div>
                            <FilterHr onFilterChange={handleFilterChange}/>
                        </div>
                    
                        <div className="flex space-x-4">
                            <Kalender onDateChange={handleDateChange} />
                            <DownloadButton attendanceData={filteredAttendanceData} />
                        </div>
                    </div>
                    <AttendanceTable attendanceData={filteredAttendanceData} />
                </section>
            </div>
        </div>
    );
}

export default DashboardHr;
