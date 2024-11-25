import React, { useState, useEffect } from 'react';

const RealTimeClockWithDay = () => {
    const [currentTime, setCurrentTime] = useState('');
    
    useEffect(() => {
        const updateClock = () => {
            const date = new Date();
            
            // Opsi untuk menampilkan hari
            // const optionsDay = { weekday: 'long' };
            // const day = date.toLocaleDateString('id-ID', optionsDay);  // Sabtu
            
            // Opsi untuk menampilkan tanggal
            const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
            const fullDate = date.toLocaleDateString('id-ID', dateOptions);  // 20 Oktober 2024
            
            // Waktu (HH:MM)
            const time = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });  // 18:24
            
            // Gabungkan hari, tanggal, dan waktu
            setCurrentTime(`${fullDate}, ${time}`);
        };

        // Update setiap detik
        const intervalId = setInterval(updateClock, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <span>{currentTime}</span>  // Menggunakan span agar tampil dalam satu baris
    );
};

export default RealTimeClockWithDay;
