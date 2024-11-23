import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Kalender = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onDateChange(date);  // Panggil fungsi dari parent dengan tanggal yang dipilih
    };

    return (
        <div className="relative">
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="p-2 rounded-lg border border-[#417D7A] w-full cursor-pointer"
                placeholderText="Pilih Tanggal"
                dateFormat="dd/MM/yyyy"  // Format tampilan tanggal di datepicker
            />
        </div>
    );
};

export default Kalender;