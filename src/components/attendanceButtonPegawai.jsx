import React, { useState } from 'react';
import { useEmployeeAttendance } from '../components/attendanceData'; // Ganti dengan nama konteks yang sesuai
import { formatDate } from '../formatdate'; // Pastikan untuk mengimpor formatDate

const UpdateEmployeeAttendanceButton = () => {
    const { setEmployeeAttendanceData } = useEmployeeAttendance(); // Ganti dengan hook yang sesuai
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [currentEntry, setCurrentEntry] = useState(null);

    const handleAttendanceUpdate = () => {
        const now = new Date();
        const currentDate = formatDate(now); // Format tanggal
        let status;
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        // Tentukan status kehadiran
        if (currentHour === 8 && currentMinute >= 0 && currentMinute < 30) {
            status = 'Hadir';
        } else if (currentHour > 8) {
            status = 'Terlambat';
        } else {
            status = 'Absen';
        }

        const newEntry = {
            date: currentDate, // Tanggal sudah diformat
            status,
            lembur: '-', // Default lembur diisi '-'
        };

        setEmployeeAttendanceData(prevData => [...prevData, newEntry]); // Sesuaikan dengan data pegawai
        console.log("Updated attendance data:", newEntry);
        setIsCheckedIn(true);
        setCurrentEntry(newEntry);
    };

    const handleCheckOutUpdate = () => {
        const now = new Date();
        const checkOutHour = now.getHours();
        let overtime = '-';

        // Hitung jam lembur jika check-out lewat jam 17
        if (checkOutHour > 17) {
            const overtimeHours = checkOutHour - 17;
            overtime = `${overtimeHours} Jam`;
        }

        // Update entri yang sudah ada
        const updatedEntry = {
            ...currentEntry,
            lembur: overtime,
        };

        setEmployeeAttendanceData(prevData => {
            const updatedData = prevData.map(entry =>
                entry.date === currentEntry.date ? updatedEntry : entry
            );
            console.log("Updated attendance data on check-out:", updatedData);
            return updatedData;
        });

        setIsCheckedIn(false);
    };

    return (
        <div>
            <button 
                onClick={handleAttendanceUpdate} 
                className="p-2 rounded-lg border border-[#417D7A] m-2" 
                disabled={isCheckedIn}
            >
                Update Kehadiran Masuk
            </button>

            <button 
                onClick={handleCheckOutUpdate} 
                className="p-2 rounded-lg border border-[#417D7A] m-2" 
                disabled={!isCheckedIn}
            >
                Update Kehadiran Keluar
            </button>
        </div>
    );
};

export default UpdateEmployeeAttendanceButton;
