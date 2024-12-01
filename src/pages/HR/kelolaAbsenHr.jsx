import React, { useState } from "react";
import HeaderHR from "../../components/DashboardHr/header";
import Sidebar from "../../components/DashboardHr/sidebar";
import AttendanceTable from "../../components/DashboardHr/tablepresensi";
import Kalender from "../../components/DashboardHr/kalender";
import DownloadButton from "../../components/DashboardHr/download";
import { FiSearch, FiCalendar, FiDownload } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { formatDate } from "../../components/DashboardHr/formatdate";
import { useAttendance } from '../../components/DashboardHr/AttendanceContext';
import FormComponent from '../../components/DashboardHr/formAbsen';
const Dashboard = () => {
    const { attendanceData } = useAttendance();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [filteredData, setFilteredData] = useState(attendanceData);

    const filteredAttendanceData = attendanceData.filter((item) => {
        const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = selectedFilter ? item.status === selectedFilter : true;
        const matchesDate = selectedDate ? formatDate(selectedDate) === item.date : true; 
        return matchesSearchTerm && matchesFilter && matchesDate;
    });

    const [isFormVisible, setFormVisible] = useState(false);

    const handleButtonClick = () => {
      setFormVisible(true);
    };
  
    const handleCloseForm = () => {
      setFormVisible(false);
    };

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

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6 ml-64 font-poppins">
        <HeaderHR />

        <section className='rounded-lg my-6'>
            <div className="flex items-center justify-between p-4">
            <div className="flex justify-start space-x-4">
                            <h2 className="text-lg font-bold text-tertiary">OVERVIEW ATTENDANCE</h2>
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
                        </div>
                        <div className="flex items-center space-x-4">
                            <Kalender onDateChange={handleDateChange} />
                            <DownloadButton attendanceData={filteredAttendanceData} />
                        </div>
            </div>
            </section>

        <section className="pt-5">
        <AttendanceTable attendanceData={filteredAttendanceData} />
        </section>

        
      </main>
    </div>
  );
};

export default Dashboard;
