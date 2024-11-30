import React, { useState } from "react";
import HeaderHR from "../components/DashboardHr/header";
import Sidebar from "../components/DashboardHr/sidebar";
import FilterHr from "../components/DashboardHr/filterdashboard";
import Kalender from "../components/DashboardHr/kalender";
import AttendanceTable from "../components/DashboardHr/tablepresensi";
import RealTimeClockWithDay from "../components/DashboardHr/time";
import { useAttendance } from '../components/DashboardHr/AttendanceContext';
import UpdateAttendanceButton from "../components/DashboardHr/attendanceB";
import { formatDate } from "../components/DashboardHr/formatdate";
import { FaUser, FaCheck, FaTimes, FaClock, FaCalendarAlt } from "react-icons/fa"; 

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

    const totalKaryawan = attendanceData.length;

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

    const filteredAttendanceData = attendanceData.filter((item) => {
        const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = selectedFilter ? item.status === selectedFilter : true;
        const matchesDate = selectedDate ? formatDate(selectedDate) === item.date : true;
        return matchesSearchTerm && matchesFilter && matchesDate;
    });

    const filteredStats = calculateFilteredStats(filteredAttendanceData);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6 bg-gray-100">
                <HeaderHR />
                <section className="p-6 rounded-lg my-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold text-[#16423C]">HR ATTENDANCE</h2>
                        <UpdateAttendanceButton />
                        <h3 className="text-lg regular text-[#417D7A]">
                            <RealTimeClockWithDay />
                        </h3>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                         {/* Total Karyawan */}
                         <div className="text-center flex flex-col items-left p-4 bg-white border border-[#417D7A] rounded-md shadow-sm">
                            <FaUser className="text-xl text-[#16423C] mb-2" /> {/* Ikon Karyawan */}
                            <p className="text-gray-600 text-[#417D7A] text-left">Karyawan</p>
                            <p className="text-2xl font-bold text-[#16423C] text-left">{totalKaryawan}</p>
                        </div>

                        {/* Kotak Statistik Berdasarkan Status */}
                        {filteredStats.map((stat, index) => (
                            <div key={index} className="text-center flex flex-col items-left p-4 bg-white border border-[#417D7A] rounded-md shadow-sm">
                                {/* Menampilkan ikon yang berbeda untuk setiap status */}
                                {stat.label === "Hadir" && <FaCheck className="text-xl text-[#16423C] mb-2" />}
                                {stat.label === "Terlambat" && <FaClock className="text-xl text-[#16423C] mb-2" />}
                                {stat.label === "Absen" && <FaTimes className="text-xl text-[#16423C] mb-2" />}
                                {stat.label === "Izin/Cuti" && <FaCalendarAlt className="text-xl text-[#16423C] mb-2" />}
                                
                                {/* Nilai dan Label */}
                                <p className="text-[#417D7A] text-left">{stat.label}</p>
                                <p className="text-2xl font-bold text-[#16423C] text-left">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-md my-6">
                    <h2 className="text-lg font-bold mb-4 text-[#16423C]">Overview Attendance</h2>
                    <div className="flex justify-between mb-4 text-[#16423C]">
                        <input 
                            type="text"
                            placeholder="Search"
                            className="p-2 border rounded-lg w-1/3 border border-[#417D7A]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="flex space-x-4">
                            <FilterHr onFilterChange={handleFilterChange}/>
                            <Kalender onDateChange={handleDateChange} />
                            <button className="p-2 rounded-lg border border-[#417D7A]">Unduh</button>
                        </div>
                    </div>
                    <AttendanceTable attendanceData={filteredAttendanceData} />
                </section>
            </div>
        </div>
    );
}

export default DashboardHr;


