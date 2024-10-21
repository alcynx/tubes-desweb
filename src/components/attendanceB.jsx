// import React, { useState } from 'react';
// import { useAttendance } from '../AttendanceContext';

// const UpdateAttendanceButton = () => {
//     const { setAttendanceData } = useAttendance();
//     const [isCheckedIn, setIsCheckedIn] = useState(false);
//     const [currentEntry, setCurrentEntry] = useState(null);

//     const handleAttendanceUpdate = () => {
//         const now = new Date();
//         const currentDate = now.toLocaleDateString('id-ID'); // Format tanggal lokal
//         const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

//         // Tentukan status berdasarkan waktu
//         const status = now.getHours() >= 8 ? 'Terlambat' : 'Hadir';

//         // Buat entry baru
//         const newEntry = {
//             date: currentDate,
//             name: 'Lattema Lie', // Ganti sesuai kebutuhan
//             role: 'Project Manager', // Ganti sesuai kebutuhan
//             status,
//             masuk: currentTime,
//             keluar: '-',
//             lembur: '-',
//         };

//         setAttendanceData(prevData => [...prevData, newEntry]);
//         setIsCheckedIn(true);  // Tandai bahwa karyawan sudah check-in
//         setCurrentEntry(newEntry);  // Simpan entry yang sekarang
//     };

//     const handleCheckOutUpdate = () => {
//         const now = new Date();
//         const checkOutTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

//         // Cek apakah jam keluar lebih dari jam 5 sore
//         const overtime = now.getHours() >= 17 ? `${now.getHours() - 17} Jam` : '-';

//         // Update entry yang sudah ada
//         const updatedEntry = {
//             ...currentEntry,
//             keluar: checkOutTime,
//             lembur: overtime,
//         };

//         // Update data kehadiran dengan entry yang diperbarui
//         setAttendanceData(prevData => prevData.map(entry =>
//             entry === currentEntry ? updatedEntry : entry
//         ));

//         setIsCheckedIn(false);  // Tandai bahwa karyawan sudah check-out
//     };

//     return (
//         <div>
//             <button 
//                 onClick={handleAttendanceUpdate} 
//                 className="p-2 rounded-lg border border-[#417D7A] m-2" 
//                 disabled={isCheckedIn}
//             >
//                 Update Kehadiran Masuk
//             </button>

//             <button 
//                 onClick={handleCheckOutUpdate} 
//                 className="p-2 rounded-lg border border-[#417D7A] m-2" 
//                 disabled={!isCheckedIn}
//             >
//                 Update Kehadiran Keluar
//             </button>
//         </div>
//     );
// };

// export default UpdateAttendanceButton;


// import React, { useState } from 'react';
// import { useAttendance } from '../AttendanceContext';

// const UpdateAttendanceButton = () => {
//     const { setAttendanceData } = useAttendance();
//     const [isCheckedIn, setIsCheckedIn] = useState(false);
//     const [currentEntry, setCurrentEntry] = useState(null);

//     const handleAttendanceUpdate = () => {
        // const now = new Date();
        // const currentDate = now.toLocaleDateString('id-ID');
        // const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

        // // Tentukan status berdasarkan waktu
        // let status;
        // const currentHour = now.getHours();
        // const currentMinute = now.getMinutes();

        // // Aturan check-in
        // if (currentHour === 8 && currentMinute >= 0 && currentMinute < 30) {
        //     status = 'Hadir';
        // } else if (currentHour > 8) {
        //     status = 'Terlambat';
        // } else {
        //     status = 'Absen'; // Misalkan jika sebelum jam 08:00
        // }

        // // Buat entry baru
        // const newEntry = {
        //     date: currentDate,
        //     name: 'Lattema Lie', // Ganti sesuai kebutuhan
        //     role: 'Project Manager', // Ganti sesuai kebutuhan
        //     status,
        //     masuk: currentTime,
        //     keluar: '-',
        //     lembur: '-',
        // };

        // setAttendanceData(prevData => [...prevData, newEntry]);
        // setIsCheckedIn(true);
        // setCurrentEntry(newEntry);
//         const now = new Date();
//         const currentDate = formatDate(now); // Gunakan formatDate untuk konsistensi
//         const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        
//         let status;
//         const currentHour = now.getHours();
//         const currentMinute = now.getMinutes();

//         if (currentHour === 8 && currentMinute >= 0 && currentMinute < 30) {
//             status = 'Hadir';
//         } else if (currentHour > 8) {
//             status = 'Terlambat';
//         } else {
//             status = 'Absen';
//         }

//         const newEntry = {
//             date: currentDate, // Tanggal sudah diformat
//             name: 'Lattema Lie',
//             role: 'Project Manager',
//             status,
//             masuk: currentTime,
//             keluar: '-',
//             lembur: '-',
//         };

//         setAttendanceData(prevData => [...prevData, newEntry]);
//         console.log("Updated attendance data:", [...prevData, newEntry]);
//         setIsCheckedIn(true);
//         setCurrentEntry(newEntry);
//     };

//     const handleCheckOutUpdate = () => {
//         const now = new Date();
//         const checkOutTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        
//         let overtime = '-';
//         const checkOutHour = now.getHours();

//         // Aturan check-out
//         if (checkOutHour > 17) {
//             const overtimeHours = checkOutHour - 17; // Hitung jam lembur
//             overtime = `${overtimeHours} Jam`;
//         }

//         // Update entry yang sudah ada
//         const updatedEntry = {
//             ...currentEntry,
//             keluar: checkOutTime,
//             lembur: overtime,
//         };

//         // setAttendanceData(prevData => prevData.map(entry =>
//         //     entry === currentEntry ? updatedEntry : entry
//         // ));
//         setAttendanceData(prevData => prevData.map(entry =>
//             entry.name === currentEntry.name && entry.date === currentEntry.date ? updatedEntry : entry
//         ));
//         console.log("Updated attendance data on check-out:", updatedEntry);

//         setIsCheckedIn(false);
//     };

//     return (
//         <div>
//             <button 
//                 onClick={handleAttendanceUpdate} 
//                 className="p-2 rounded-lg border border-[#417D7A] m-2" 
//                 disabled={isCheckedIn}
//             >
//                 Update Kehadiran Masuk
//             </button>

//             <button 
//                 onClick={handleCheckOutUpdate} 
//                 className="p-2 rounded-lg border border-[#417D7A] m-2" 
//                 disabled={!isCheckedIn}
//             >
//                 Update Kehadiran Keluar
//             </button>
//         </div>
//     );
// };

// export default UpdateAttendanceButton;


import React, { useState } from 'react';
import { useAttendance } from '../AttendanceContext';
import { formatDate } from '../formatdate'; // Pastikan untuk mengimpor formatDate

const UpdateAttendanceButton = () => {
    const { setAttendanceData } = useAttendance();
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [currentEntry, setCurrentEntry] = useState(null);

    const handleAttendanceUpdate = () => {
        const now = new Date();
        const currentDate = formatDate(now); // Gunakan formatDate untuk konsistensi
        const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        
        let status;
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        if (currentHour === 8 && currentMinute >= 0 && currentMinute < 30) {
            status = 'Hadir';
        } else if (currentHour > 8) {
            status = 'Terlambat';
        } else {
            status = 'Absen';
        }

        const newEntry = {
            date: currentDate, // Tanggal sudah diformat
            name: 'Lattema Lie',
            role: 'Project Manager',
            status,
            masuk: currentTime,
            keluar: '-',
            lembur: '-',
        };

        setAttendanceData(prevData => [...prevData, newEntry]);
        console.log("Updated attendance data:", newEntry);
        setIsCheckedIn(true);
        setCurrentEntry(newEntry);
    };

    const handleCheckOutUpdate = () => {
        const now = new Date();
        const checkOutTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        
        let overtime = '-';
        const checkOutHour = now.getHours();

        // Aturan check-out
        if (checkOutHour > 17) {
            const overtimeHours = checkOutHour - 17; // Hitung jam lembur
            overtime = `${overtimeHours} Jam`;
        }

        // Update entry yang sudah ada
        const updatedEntry = {
            ...currentEntry,
            keluar: checkOutTime,
            lembur: overtime,
        };

        setAttendanceData(prevData => {
            const updatedData = prevData.map(entry =>
                entry.name === currentEntry.name && entry.date === currentEntry.date ? updatedEntry : entry
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

export default UpdateAttendanceButton;
