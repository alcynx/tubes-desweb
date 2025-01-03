import React, { useState } from "react";
import { BsFilterRight } from "react-icons/bs";

const FilterHr = ({ onFilterChange }) => {
    const filterOptions = ['Hadir', 'Absen', 'Terlambat', 'Izin', 'Cuti'];
    const [selectedFilter, setSelectedFilter] = useState('');

    const handleFilterSelect = (e) => {
        const selected = e.target.value;
        setSelectedFilter(selected);
        onFilterChange(selected);
    };

    return (
        <div className="relative text-[#16423C]">
            <select
                value={selectedFilter}
                onChange={handleFilterSelect}
                className="p-2 rounded-lg border border-[#417D7A] appearance-none pr-10"
            >
                <option value="">Filter</option>
                {filterOptions.map((filter, index) => (
                    <option key={index} value={filter}>
                        {filter}
                    </option>
                ))}
            </select>
            <span className="absolute inset-y-0 right-1 flex items-center pointer-events-none text-gray-500">
                <BsFilterRight style={{ color: '#417D7A', fontSize: '32px' }} />
            </span>
        </div>
    );
};

export default FilterHr;


