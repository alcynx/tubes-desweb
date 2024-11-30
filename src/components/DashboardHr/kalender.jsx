import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

const Kalender = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onDateChange(date); // Panggil fungsi dari parent dengan tanggal yang dipilih
    };

    return (
        <div className="inline-flex font-poppins items-center border border-secondary rounded-md p-2 space-x-2 text-secondary">
            <FaCalendarAlt className="text-2xl" />
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="focus:outline-none text-secondary placeholder:text-secondary w-[100px]" // Batas lebar eksplisit
                placeholderText="Tanggal"
                dateFormat="dd/MM/yyyy"
            />
        </div>
    );
};

export default Kalender;
