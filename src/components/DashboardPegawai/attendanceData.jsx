import React, { createContext, useContext, useState } from 'react';

// Buat konteks untuk presensi pegawai
const EmployeeAttendanceContext = createContext();

// Provider untuk konteks presensi pegawai
export const EmployeeAttendanceProvider = ({ children }) => {
    const [employeeAttendanceData, setEmployeeAttendanceData] = useState([
        { date: '31/05/24', status: 'Terlambat', lembur: '-' },
        { date: '31/05/24', status: 'Absen', lembur: '-' },
        { date: '31/05/24', status: 'Hadir', lembur: '2 Jam' },
        { date: '01/06/24', status: 'Terlambat', lembur: '-' },
        { date: '01/06/24', status: 'Absen', lembur: '-' },
    ]);

    return (
        <EmployeeAttendanceContext.Provider value={{ employeeAttendanceData, setEmployeeAttendanceData }}>
            {children}
        </EmployeeAttendanceContext.Provider>
    );
};

// Custom hook untuk menggunakan konteks presensi pegawai
export const useEmployeeAttendance = () => {
    return useContext(EmployeeAttendanceContext);
};
