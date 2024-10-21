// // import React, { useState, useRef } from "react";
// // import { BsFilterRight } from 'react-icons/bs';
// // import DatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";

// // const Kalender = () => {
// //     const [selectedDate, setSelectedDate] = useState(null);
// //     const [isCalendarOpen, setIsCalendarOpen] = useState(false);
// //     const datePickerRef = useRef(null);  // Reference to DatePicker

// //     const handleIconClick = () => {
// //         setIsCalendarOpen(!isCalendarOpen);  // Toggle calendar visibility
// //     };

// //     return (
// //         <div className="relative">
// //             {/* Custom Date Picker */}
// //             <DatePicker
// //                 ref={datePickerRef} // Attach ref to DatePicker
// //                 selected={selectedDate}
// //                 onChange={(date) => setSelectedDate(date)}
// //                 className="p-2 rounded-lg border border-[#417D7A] pr-10 w-full cursor-default" // Add cursor style
// //                 open={isCalendarOpen}  // Control calendar visibility
// //                 onClickOutside={() => setIsCalendarOpen(false)}  // Close calendar on click outside
// //                 // onFocus={(e) => e.preventDefault()}  // Prevent focus on the input
// //                 // onKeyDown={(e) => e.preventDefault()}  // Prevent keyboard input
// //             />
// //             {/* Label Text (instead of placeholder) */}
// //             <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
// //                 Tanggal
// //             </span>
// //             {/* Icon filter */}
// //             <span
// //                 className="absolute inset-y-0 right-2 flex items-center text-gray-500 cursor-pointer"
// //                 onClick={handleIconClick}  // Trigger date picker on icon click
// //             >
// //                 <BsFilterRight style={{ color: '#417D7A', fontSize: '32px' }} />
// //             </span>
// //         </div>
// //     );
// // };

// // export default Kalender;


// // import React, { useState, useRef } from "react";
// // import { BsFilterRight } from 'react-icons/bs';
// // import DatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";

// // const Kalender = () => {
// //     const [selectedDate, setSelectedDate] = useState(null);
// //     const [isCalendarOpen, setIsCalendarOpen] = useState(false);
// //     const datePickerRef = useRef(null);  // Reference to DatePicker

// //     const handleIconClick = () => {
// //         setIsCalendarOpen(!isCalendarOpen);  // Toggle calendar visibility
// //     };

// //     return (
// //         <div className="relative">
// //             {/* Custom Date Picker */}
// //             <DatePicker
// //                 ref={datePickerRef} // Attach ref to DatePicker
// //                 selected={selectedDate}
// //                 onChange={(date) => setSelectedDate(date)}
// //                 className="p-2 rounded-lg border border-[#417D7A] pr-10 w-full cursor-pointer bg-transparent" // Cursor pointer and transparent background
// //                 placeholderText=" "  // Prevent default placeholder
// //                 open={isCalendarOpen}  // Control calendar visibility
// //                 onClickOutside={() => setIsCalendarOpen(false)}  // Close calendar on click outside
// //                 onFocus={(e) => e.preventDefault()}  // Prevent focus on the input
// //                 onKeyDown={(e) => e.preventDefault()}  // Prevent keyboard input
// //             />
// //             {/* Label Text (instead of placeholder) */}
// //             <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
// //                 Tanggal
// //             </span>
// //             {/* Icon filter */}
// //             <span
// //                 className="absolute inset-y-0 right-2 flex items-center text-gray-500 cursor-pointer"
// //                 onClick={handleIconClick}  // Trigger date picker on icon click
// //             >
// //                 <BsFilterRight style={{ color: '#417D7A', fontSize: '32px' }} />
// //             </span>
// //         </div>
// //     );
// // };

// // export default Kalender;

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Kalender = ({ onDateChange }) => {
//     const [selectedDate, setSelectedDate] = useState(null);

//     const handleDateChange = (date) => {
//         setSelectedDate(date);
//         onDateChange(date);  // Panggil fungsi dari parent untuk filter data
//     };

//     return (
//         <div className="relative">
//             <DatePicker
//                 selected={selectedDate}
//                 onChange={handleDateChange}
//                 className="p-2 rounded-lg border border-[#417D7A] w-full cursor-pointer"
//                 placeholderText="Pilih Tanggal"
//                 dateFormat="dd/MM/yyyy"  // Format tanggal Indonesia
//             />
//         </div>
//     );
// };

// export default Kalender;

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
