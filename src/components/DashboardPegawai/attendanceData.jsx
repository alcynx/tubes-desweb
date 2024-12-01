import React, { createContext, useContext, useState, useEffect } from 'react';

const EmployeeAttendanceContext = createContext();

export const EmployeeAttendanceProvider = ({ children }) => {
    const [employeeAttendanceData, setEmployeeAttendanceData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('employeeAttendanceData')) || [];
        const initialData = [
            { 
                name: 'Nabila Chairunnisa',
                role: 'Quality Assurance',
                date: '30/11/24', 
                status: 'Terlambat', 
                masuk: '9:00',
                keluar: '17:00',
                lembur: '-' 
            },
            { 
                name: 'Nabila Chairunnisa',
                role: 'Quality Assurance', 
                date: '29/11/24', 
                status: 'Absen', 
                masuk: '-',
                keluar: '-',
                lembur: '-' 
            },
            { 
                name: 'Nabila Chairunnisa',
                role: 'Quality Assurance',
                date: '28/11/24', 
                status: 'Hadir', 
                masuk: '8:20',
                keluar: '19:00',
                lembur: '2 Jam' 
            },
            { 
                name: 'Nabila Chairunnisa',
                role: 'Quality Assurance', 
                date: '27/11/24', 
                status: 'Terlambat', 
                masuk: '9:00',
                keluar: '17:00',
                lembur: '-' 
            },
            { 
                name: 'Nabila Chairunnisa',
                role: 'Quality Assurance',
                date: '26/11/24', 
                status: 'Absen', 
                masuk: '-',
                keluar: '-',
                lembur: '-' 
            },
            { 
                name: 'Alifah Nur Aisyah',
                role: 'Developer',
                date: '31/05/24', 
                status: 'Terlambat', 
                masuk: '9:30',
                keluar: '17:00',
                lembur: '-' 
            },
            { 
                name: 'Alifah Nur Aisyah',
                role: 'Developer',
                date: '01/06/24', 
                status: 'Hadir', 
                masuk: '8:10',
                keluar: '16:30',
                lembur: '1 Jam' 
            },
            { 
                name: 'Alifah Nur Aisyah',
                role: 'Developer',
                date: '02/06/24', 
                status: 'Absen', 
                masuk: '-',
                keluar: '-',
                lembur: '-' 
            },
            { 
                name: 'Alifah Nur Aisyah',
                role: 'Developer',
                date: '03/06/24', 
                status: 'Terlambat', 
                masuk: '9:10',
                keluar: '17:30',
                lembur: '-' 
            },
            { 
                name: 'Alifah Nur Aisyah',
                role: 'Developer',
                date: '04/06/24', 
                status: 'Hadir', 
                masuk: '8:00',
                keluar: '17:00',
                lembur: '2 Jam' 
            },
            { 
                name: 'Desti Nur Irawati',
                role: 'Designer',
                date: '31/05/24', 
                status: 'Hadir', 
                masuk: '8:00',
                keluar: '17:00',
                lembur: '-' 
            },
            { 
                name: 'Desti Nur Irawati',
                role: 'Designer',
                date: '01/06/24', 
                status: 'Terlambat', 
                masuk: '9:00',
                keluar: '17:00',
                lembur: '-' 
            },
            { 
                name: 'Desti Nur Irawati',
                role: 'Designer',
                date: '02/06/24', 
                status: 'Absen', 
                masuk: '-',
                keluar: '-',
                lembur: '-' 
            },
            { 
                name: 'Desti Nur Irawati',
                role: 'Designer',
                date: '03/06/24', 
                status: 'Hadir', 
                masuk: '8:15',
                keluar: '17:00',
                lembur: '1 Jam' 
            },
            { 
                name: 'Desti Nur Irawati',
                role: 'Designer',
                date: '04/06/24', 
                status: 'Absen', 
                masuk: '-',
                keluar: '-',
                lembur: '-' 
            },
            { 
                name: 'Arifia Dyah Sulistyani',
                role: 'Manager',
                date: '31/05/24', 
                status: 'Terlambat', 
                masuk: '9:20',
                keluar: '17:30',
                lembur: '-' 
            },
            { 
                name: 'Arifia Dyah Sulistyani',
                role: 'Manager',
                date: '01/06/24', 
                status: 'Hadir', 
                masuk: '8:00',
                keluar: '17:00',
                lembur: '1 Jam' 
            },
            { 
                name: 'Arifia Dyah Sulistyani',
                role: 'Manager',
                date: '02/06/24', 
                status: 'Absen', 
                masuk: '-',
                keluar: '-',
                lembur: '-' 
            },
            { 
                name: 'Arifia Dyah Sulistyani',
                role: 'Manager',
                date: '03/06/24', 
                status: 'Hadir', 
                masuk: '8:10',
                keluar: '17:10',
                lembur: '2 Jam' 
            },
            { 
                name: 'Arifia Dyah Sulistyani',
                role: 'Manager',
                date: '04/06/24', 
                status: 'Terlambat', 
                masuk: '9:00',
                keluar: '17:30',
                lembur: '-' 
            },
        ];
        const allData = [...initialData, ...storedData];

        const sortedData = allData.sort((a, b) => {
            const dateA = new Date(a.date.split('/').reverse().join('-'));
            const dateB = new Date(b.date.split('/').reverse().join('-'));
            return dateB - dateA;
        });

        setEmployeeAttendanceData(sortedData);
    }, []);

    useEffect(() => {
        localStorage.setItem('employeeAttendanceData', JSON.stringify(employeeAttendanceData));
    }, [employeeAttendanceData]);

    return (
        <EmployeeAttendanceContext.Provider value={{ employeeAttendanceData, setEmployeeAttendanceData }}>
            {children}
        </EmployeeAttendanceContext.Provider>
    );
};

export const useEmployeeAttendance = () => useContext(EmployeeAttendanceContext);
