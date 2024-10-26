import React, { createContext, useContext, useState } from 'react';

// Buat konteks
const AttendanceContext = createContext();

// Provider untuk konteks
export const AttendanceProvider = ({ children }) => {
    const [attendanceData, setAttendanceData] = useState([
        { date: '31/05/24', name: 'Noladhipa A', role: 'HR Manager', status: 'Terlambat', masuk: '08.30', keluar: '16.00', lembur: '-' },
        { date: '31/05/24', name: 'Gamatama', role: 'Software E', status: 'Absen', masuk: '-', keluar: '-', lembur: '-' },
        { date: '31/05/24', name: 'Lattema Lie', role: 'Project Manager', status: 'Hadir', masuk: '08.00', keluar: '18.00', lembur: '2 Jam' },
        { date: '31/05/24', name: 'Noladhipa A', role: 'HR Manager', status: 'Terlambat', masuk: '08.30', keluar: '16.00', lembur: '-' },
        { date: '31/05/24', name: 'Gamatama', role: 'Software E', status: 'Absen', masuk: '-', keluar: '-', lembur: '-' },
    ]);

    return (
        <AttendanceContext.Provider value={{ attendanceData, setAttendanceData }}>
            {children}
        </AttendanceContext.Provider>
    );
};

// Custom hook untuk menggunakan konteks
export const useAttendance = () => {
    return useContext(AttendanceContext);
};

