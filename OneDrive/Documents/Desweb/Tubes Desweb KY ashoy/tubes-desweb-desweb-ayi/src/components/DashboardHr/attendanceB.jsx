
import React, { useState } from 'react';
import { useAttendance } from "./AttendanceContext";
import { formatDate } from "./formatdate";


const UpdateAttendanceButton = () => {
    const { attendanceData, setAttendanceData } = useAttendance();
    const [isCheckedIn, setIsCheckedIn] = useState(false);

    const handleAttendanceUpdate = () => {
        const now = new Date();
        const currentDate = formatDate(now);
        const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

        let status;
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        if (currentHour === 8 && currentMinute >= 0 && currentMinute < 30) {
            status = 'Hadir';
        } else if (currentHour == 8 && currentMinute >= 30) {
            status = 'Terlambat';
        } else if (currentHour > 8) {
            status = 'Terlambat';
        } else {
            status = 'Absen';
        }

        const newEntry = {
            date: currentDate,
            name: 'Lattema Lie',
            role: 'Project Manager',
            status,
            masuk: currentTime,
            keluar: '-',
            lembur: '-',
        };

        setAttendanceData(prevData => [...prevData, newEntry]);
        setIsCheckedIn(true);
    };

    const handleCheckOutUpdate = () => {
        const now = new Date();
        const checkOutTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        let overtime = '-';
        const checkOutHour = now.getHours();

        if (checkOutHour > 17) {
            const overtimeHours = checkOutHour - 17;
            overtime = `${overtimeHours} Jam`;
        }

        setAttendanceData(prevData => {
            // Cari entry terakhir yang sesuai kriteria
            const updatedData = prevData.map((entry, index, arr) => {
                if (index === arr.findLastIndex(e => e.name === 'Lattema Lie' && e.keluar === '-')) {
                    return {
                        ...entry,
                        keluar: checkOutTime,
                        lembur: overtime,
                    };
                }
                return entry;
            });

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

export default UpdateAttendanceButton;
