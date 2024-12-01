import React, { useState } from 'react';
import { useEmployeeAttendance } from './attendanceData';
import { formatDate } from '../DashboardHr/formatdate';

const UpdateEmployeeAttendanceButton = () => {
    const { setEmployeeAttendanceData, employeeAttendanceData } = useEmployeeAttendance();
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [currentEntry, setCurrentEntry] = useState(null);

    const handleAttendanceUpdate = () => {
        const now = new Date();
        const currentDate = formatDate(now);
        let status;
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
    
        if (currentHour === 8 && currentMinute >= 0 && currentMinute < 30) {
            status = 'Hadir';
        } else if (currentHour > 8 || (currentHour === 8 && currentMinute >= 30)) {
            status = 'Terlambat';
        } else {
            status = 'Absen';
        }
    
        const existingEntry = employeeAttendanceData.find(entry => entry.name === 'Nabila Chairunnisa' && entry.date === currentDate);
        
        let updatedData;
        if (existingEntry) {
            const updatedEntry = {
                ...existingEntry,
                status,
                masuk: `${now.getHours()}:${now.getMinutes()}`,
            };
            updatedData = employeeAttendanceData.map(entry =>
                entry.name === 'Nabila Chairunnisa' && entry.date === currentDate ? updatedEntry : entry
            );
            setCurrentEntry(updatedEntry);
        } else {
            const newEntry = {
                name: 'Nabila Chairunnisa',
                role: 'Quality Assurance',
                date: currentDate,
                status,
                lembur: '-',
                masuk: `${now.getHours()}:${now.getMinutes()}`,
                keluar: '-',
            };
            updatedData = [...employeeAttendanceData, newEntry];
            setCurrentEntry(newEntry);
        }

        setEmployeeAttendanceData(updatedData);
        localStorage.setItem('employeeAttendanceData', JSON.stringify(updatedData)); 
        setIsCheckedIn(true);
    };
    
    const handleCheckOutUpdate = () => {
        const now = new Date();
        const checkOutHour = now.getHours();
        let overtime = '-';
    
        if (checkOutHour > 17) {
            const overtimeHours = checkOutHour - 17;
            overtime = `${overtimeHours} Jam`;
        }
    
        const updatedEntry = {
            ...currentEntry,
            lembur: overtime,
            jamKeluar: `${now.getHours()}:${now.getMinutes()}`,
        };
    
        const updatedData = employeeAttendanceData.map(entry =>
            entry.name === 'Nabila Chairunnisa' && entry.date === currentEntry.date ? updatedEntry : entry
        );

        setEmployeeAttendanceData(updatedData);
        localStorage.setItem('employeeAttendanceData', JSON.stringify(updatedData));
        setIsCheckedIn(false);
    };
    

    return (
        <div>
            <button
                onClick={handleAttendanceUpdate}
                className="bg-tertiary text-primary font-poppins rounded-full p-2 w-[150px] shadow-md hover:font-bold transition duration-300"
                disabled={isCheckedIn}
            >
                Jam Masuk
            </button>

            <button
                onClick={handleCheckOutUpdate}
                className="bg-primary text-tertiary font-poppins rounded-full p-2 w-[150px] m-2 shadow-md hover:font-bold transition duration-300"
                disabled={!isCheckedIn}
            >
                Jam Keluar
            </button>
        </div>
    );
};

export default UpdateEmployeeAttendanceButton;
