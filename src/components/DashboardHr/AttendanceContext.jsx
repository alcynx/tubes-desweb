import React, { createContext, useContext, useState, useEffect } from 'react';
import { useEmployeeAttendance } from '../../components/DashboardPegawai/attendanceData';

const AttendanceContext = createContext(null);

export const AttendanceProvider = ({ children }) => {
    const { employeeAttendanceData } = useEmployeeAttendance();
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('employeeAttendanceData')) || [];
        
        if (storedData.length > 0) {
            setAttendanceData(storedData);
        } else if (employeeAttendanceData.length > 0) {
            setAttendanceData(employeeAttendanceData);
        }
    }, [employeeAttendanceData]);

    useEffect(() => {
        const handleStorageChange = () => {
            const storedData = JSON.parse(localStorage.getItem('employeeAttendanceData')) || [];
            setAttendanceData(storedData);
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <AttendanceContext.Provider value={{ attendanceData, setAttendanceData }}>
            {children}
        </AttendanceContext.Provider>
    );
};

export const useAttendance = () => useContext(AttendanceContext);
