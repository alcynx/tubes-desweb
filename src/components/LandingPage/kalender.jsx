import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Kalender = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onDateChange(date); 
    };

    return (
        <div className="relative">
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="p-2 rounded-lg border border-[#417D7A] w-full cursor-pointer"
                placeholderText="Pilih Tanggal"
                dateFormat="dd/MM/yyyy" 
            />
        </div>
    );
};

export default Kalender;
