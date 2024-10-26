// import React, { useState } from "react";
// import HeaderHR from "../components/header";
// import Sidebar from "../components/sidebar";
// import FilterHr from "../components/filterdashboard";
// import Kalender from "../components/kalender";
// import AttendanceTable from "../components/tablepresensi";
// import RealTimeClockWithDay from "../components/time";

// function DashboardHr() {
//     const initialAttendanceData = [
//         { date: '31/05/24', name: 'Noladhipa A', role: 'HR Manager', status: 'Terlambat', masuk: '08.30', keluar: '16.00', lembur: '-' },
//         { date: '31/05/24', name: 'Gamatama', role: 'Software E', status: 'Absen', masuk: '-', keluar: '-', lembur: '-' },
//         { date: '31/05/24', name: 'Lattema Lie', role: 'Project Manager', status: 'Hadir', masuk: '08.00', keluar: '18.00', lembur: '2 Jam' },
//         // Tambahkan data kehadiran lainnya di sini
//     ];

//     const [searchTerm, setSearchTerm] = useState("");
//     const [selectedFilter, setSelectedFilter] = useState("");

//     // Fungsi untuk menghitung statistik berdasarkan data kehadiran
//     const calculateStats = (data) => {
//         const totalKaryawan = data.length;
//         const hadir = data.filter((item) => item.status === 'Hadir').length;
//         const terlambat = data.filter((item) => item.status === 'Terlambat').length;
//         const absen = data.filter((item) => item.status === 'Absen').length;
//         const izinCuti = data.filter((item) => item.status === 'Izin' || item.status === 'Cuti').length;

//         return [
//             { label: 'Karyawan', value: totalKaryawan },
//             { label: 'Hadir', value: hadir },
//             { label: 'Terlambat', value: terlambat },
//             { label: 'Absen', value: absen },
//             { label: 'Izin/Cuti', value: izinCuti },
//         ];
//     };

//     // Hitung statistik dari data awal kehadiran
//     const stats = calculateStats(initialAttendanceData);

//     // Fungsi untuk mengubah filter
//     const handleFilterChange = (filter) => {
//         setSelectedFilter(filter);
//     };

//     // Gabungkan filter berdasarkan search term dan status
//     const filteredAttendanceData = initialAttendanceData.filter((item) => {
//         const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
//         const matchesFilter = selectedFilter ? item.status === selectedFilter : true;
//         return matchesSearchTerm && matchesFilter;
//     });

//     return (
//         <div className="flex">
//             <Sidebar />
//             <div className="flex-1 p-6 bg-gray-100">
//                 <HeaderHR />
//                 {/* HR Attendance Stats */}
//                 <section className="p-6 rounded-lg my-6">
//                     <div className="flex justify-between items-center mb-4">
//                         {/* HR Attendance title */}
//                         <h2 className="text-lg font-semibold">HR Attendance</h2>

//                         {/* Time and Day should be on the same line */}
//                         <h3 className="text-lg regular">
//                             {/* Displaying both day and time in one line */}
//                             <RealTimeClockWithDay />
//                         </h3>
//                     </div>

//                     <div className="grid grid-cols-5 gap-4">
//                         {stats.map((stat, index) => (
//                             <div key={index} className="text-center p-4 bg-white border border-gray-300 rounded-md shadow-sm">
//                                 <p className="text-2xl font-bold">{stat.value}</p>
//                                 <p className="text-gray-600">{stat.label}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Attendance Table */}
//                 <section className="bg-white p-6 rounded-lg shadow-md my-6">
//                     <h2 className="text-lg font-semibold mb-4">Overview Attendance</h2>
//                     <div className="flex justify-between mb-4">
//                         <input 
//                             type="text"
//                             placeholder="Search by Name"
//                             className="p-2 border rounded-lg w-1/3 border border-[#417D7A]"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                         <div className="flex space-x-4">
//                             <FilterHr onFilterChange={handleFilterChange}/>
//                             <Kalender />
//                             <button className="p-2 rounded-lg border border-[#417D7A]">Unduh</button>
//                         </div>
//                     </div>
//                     <AttendanceTable attendanceData={filteredAttendanceData} />
//                 </section>
//             </div>
//         </div>
//     );
// }

// export default DashboardHr;

// src/konten/dashboardhr.js
// import React, { useState } from "react";
// import HeaderHR from "../components/header";
// import Sidebar from "../components/sidebar";
// import FilterHr from "../components/filterdashboard";
// import Kalender from "../components/kalender";
// import AttendanceTable from "../components/tablepresensi";
// import RealTimeClockWithDay from "../components/time";
// import { useAttendance } from '../AttendanceContext'; // Import useAttendance
// import UpdateAttendanceButton from "../components/attendanceB";
// import { formatDate } from "../formatdate";

// function DashboardHr() {
//     const { attendanceData } = useAttendance(); // Ambil data dari konteks
//     const [searchTerm, setSearchTerm] = useState("");
//     const [selectedFilter, setSelectedFilter] = useState("");
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [filteredData, setFilteredData] = useState(attendanceData);

//     // Fungsi untuk menghitung statistik berdasarkan data kehadiran yang terfilter
//     const calculateFilteredStats = (data) => {
//         const hadir = data.filter((item) => item.status === 'Hadir').length;
//         const terlambat = data.filter((item) => item.status === 'Terlambat').length;
//         const absen = data.filter((item) => item.status === 'Absen').length;
//         const izinCuti = data.filter((item) => item.status === 'Izin' || item.status === 'Cuti').length;

//         return [
//             { label: 'Hadir', value: hadir },
//             { label: 'Terlambat', value: terlambat },
//             { label: 'Absen', value: absen },
//             { label: 'Izin/Cuti', value: izinCuti },
//         ];
//     };

//     // Total Karyawan selalu dihitung dari initialAttendanceData, tidak dipengaruhi filter
//     const totalKaryawan = attendanceData.length;

//     // Fungsi untuk mengubah filter
//     const handleFilterChange = (filter) => {
//         setSelectedFilter(filter);
//     };

//     const handleDateChange = (date) => {
//         const formattedDate = formatDate(date);  // Konversi tanggal ke format dd/MM/yy
//         const filtered = attendanceData.filter(item => item.date === formattedDate);  // Filter data kehadiran berdasarkan tanggal
//         setFilteredData(filtered);
//     };


//     // Gabungkan filter berdasarkan search term dan status
//     const filteredAttendanceData = attendanceData.filter((item) => {
//         const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
//         const matchesFilter = selectedFilter ? item.status === selectedFilter : true;
//         const matchesDate = selectedDate ? new Date(item.date).toLocaleDateString() === selectedDate.toLocaleDateString() : true;
//         return matchesSearchTerm && matchesFilter && matchesDate;
//     });

//     // Hitung statistik dari data yang terfilter
//     const filteredStats = calculateFilteredStats(filteredAttendanceData);

//     return (
//         <div className="flex">
//             <Sidebar />
//             <div className="flex-1 p-6 bg-gray-100">
//                 <HeaderHR />
//                 {/* HR Attendance Stats */}
//                 <section className="p-6 rounded-lg my-6">
//                     <div className="flex justify-between items-center mb-4">
//                         {/* HR Attendance title */}
//                         <h2 className="text-lg font-semibold">HR Attendance</h2>
//                         <UpdateAttendanceButton/>

//                         {/* Time and Day should be on the same line */}
//                         <h3 className="text-lg regular">
//                             {/* Displaying both day and time in one line */}
//                             <RealTimeClockWithDay />
//                         </h3>
//                     </div>

//                     <div className="grid grid-cols-5 gap-4">
//                         <div className="text-center p-4 bg-white border border-gray-300 rounded-md shadow-sm">
//                             <p className="text-2xl font-bold">{totalKaryawan}</p>
//                             <p className="text-gray-600">Karyawan</p>
//                         </div>
//                         {filteredStats.map((stat, index) => (
//                             <div key={index} className="text-center p-4 bg-white border border-gray-300 rounded-md shadow-sm">
//                                 <p className="text-2xl font-bold">{stat.value}</p>
//                                 <p className="text-gray-600">{stat.label}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Attendance Table */}
//                 <section className="bg-white p-6 rounded-lg shadow-md my-6">
//                     <h2 className="text-lg font-semibold mb-4">Overview Attendance</h2>
//                     <div className="flex justify-between mb-4">
//                         <input 
//                             type="text"
//                             placeholder="Search by Name"
//                             className="p-2 border rounded-lg w-1/3 border border-[#417D7A]"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                         <div className="flex space-x-4">
//                             <FilterHr onFilterChange={handleFilterChange}/>
//                             <Kalender onDateChange={handleDateChange} />  {/* Kalender digunakan untuk filter tanggal */}
//                             <button className="p-2 rounded-lg border border-[#417D7A]">Unduh</button>
//                         </div>
//                     </div>
//                     <AttendanceTable attendanceData={filteredAttendanceData} />
//                 </section>
//             </div>
//         </div>
//     );
// }

// export default DashboardHr;

import React, { useState } from "react";
import HeaderHR from "../components/header";
import Sidebar from "../components/sidebar";
import FilterHr from "../components/filterdashboard";
import Kalender from "../components/kalender";
import AttendanceTable from "../components/tablepresensi";
import RealTimeClockWithDay from "../components/time";
import { useAttendance } from '../AttendanceContext';
import UpdateAttendanceButton from "../components/attendanceB";
import { formatDate } from "../formatdate";

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
        const formattedSearchDate = formatDate(searchDate); // Gunakan formatDate
        const filteredData = attendanceData.filter(item => item.date === formattedSearchDate);
        setFilteredData(filteredData);
    };
    

    const handleDateChange = (date) => {
        setSelectedDate(date); // Simpan tanggal yang dipilih
        // const formattedDate = formatDate(date); // Format tanggal
        // const filtered = attendanceData.filter(item => item.date === formattedDate);
        // setFilteredData(filtered);
        handleDateSearch(date);
    };

    const filteredAttendanceData = attendanceData.filter((item) => {
        const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = selectedFilter ? item.status === selectedFilter : true;
        const matchesDate = selectedDate ? formatDate(selectedDate) === item.date : true; // Perbandingan tanggal
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
                        <h2 className="text-lg font-semibold">HR Attendance</h2>
                        <UpdateAttendanceButton />
                        <h3 className="text-lg regular">
                            <RealTimeClockWithDay />
                        </h3>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="text-center p-4 bg-white border border-gray-300 rounded-md shadow-sm">
                            <p className="text-2xl font-bold">{totalKaryawan}</p>
                            <p className="text-gray-600">Karyawan</p>
                        </div>
                        {filteredStats.map((stat, index) => (
                            <div key={index} className="text-center p-4 bg-white border border-gray-300 rounded-md shadow-sm">
                                <p className="text-2xl font-bold">{stat.value}</p>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-md my-6">
                    <h2 className="text-lg font-semibold mb-4">Overview Attendance</h2>
                    <div className="flex justify-between mb-4">
                        <input 
                            type="text"
                            placeholder="Search by Name"
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


