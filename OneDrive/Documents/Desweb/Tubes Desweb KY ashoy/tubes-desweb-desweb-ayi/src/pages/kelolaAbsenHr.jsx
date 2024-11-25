import React, { useState } from "react";
import HeaderHR from "../components/DashboardHr/header";
import Sidebar from "../components/DashboardHr/sidebar";
import AttendanceTable from "../components/DashboardHr/tablepresensi";
import { FiSearch, FiCalendar, FiDownload } from "react-icons/fi";
import { MdEditSquare } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { formatDate } from "../components/DashboardHr/formatdate";
import { useAttendance } from '../components/DashboardHr/AttendanceContext';
import FormComponent from '../components/DashboardHr/formAbsen';
const Dashboard = () => {
    const { attendanceData } = useAttendance();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);

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
    
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 ">
        {/* Header */}
        <HeaderHR />

        <section className='rounded-lg my-6'>
            <div className="flex items-center justify-between p-4">
            {/* Title */}
                <div className='flex justify-start space-x-4'>
                    <h2 className="text-lg font-bold text-tertiary items-cente ">OVERVIEW ATTENDANCE</h2>
                    <div className="flex items-center border border-tertiary rounded-md p-2">
                    <FiSearch className="text-tertiary mr-2" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="text-sm text-tertiary"
                    />
                    </div>
                </div>
            

                {/* Input and Buttons */}
                <div className="flex items-center space-x-4">
                    {/* Tanggal Button */}
                    <button className="flex items-center border border-tertiary rounded-md p-2 space-x-2 text-tertiary hover:bg-gray-100">
                    <FiCalendar />
                    <span className="text-sm">Tanggal</span>
                    </button>
                    {/* Unduh Button */}
                    <button className="flex items-center border border-tertiary rounded-md p-2 space-x-2 text-tertiary hover:bg-gray-100">
                    <FiDownload />
                    <span className="text-sm">Unduh</span>
                    </button>
                </div>
            </div>
            </section>

                
        <section className='flex justify-between font-poppins'>
            {/* Tanggal Button */}
            {/* Tanggal Button */}
            <button className="flex items-center border border-tertiary rounded-md text-tertiary px-5 hover:bg-gray-100"
            onClick={handleButtonClick}
            >
            <span className="text-basic">Tambah</span>
            </button>
            {isFormVisible && <FormComponent isVisible={isFormVisible} onClose={handleCloseForm} />}

            <div className='flex space-x-4 '>
                 {/* Unduh Button */}
                 <button className="flex text-4xl text-tertiary p-2 hover:bg-gray-100">
                 <MdEditSquare />
                </button>
                <button className="flex text-3xl p-2 space-x-2 text-tertiary hover:bg-gray-100">
                <FaTrash />
                </button>
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
