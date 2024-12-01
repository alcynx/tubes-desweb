import React, { useState, useEffect } from 'react';

const RealTimeClockWithDay = () => {
    const [currentTime, setCurrentTime] = useState('');
    
    useEffect(() => {
        const updateClock = () => {
            const date = new Date();

            const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
            const fullDate = date.toLocaleDateString('id-ID', dateOptions); 
            
            const time = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
            
            setCurrentTime(`${fullDate}, ${time}`);
        };

        const intervalId = setInterval(updateClock, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <span>{currentTime}</span>
    );
};

export default RealTimeClockWithDay;
