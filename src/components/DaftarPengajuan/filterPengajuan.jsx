// src/components/DaftarPengajuan/filterPengajuan.jsx
import React, { useState } from 'react';

const FilterBerkas = ({ onFilterChange }) => {
  const [selectedBerkas, setSelectedBerkas] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedBerkas(value);
    onFilterChange(value); // Kirim filter ke parent
  };

  return (
    <div className="mb-4">
      <label htmlFor="berkasFilter" className="block font-medium">Pilih Jenis Pengajuan</label>
      <select
        id="berkasFilter"
        value={selectedBerkas}
        onChange={handleChange}
        className="mt-2 p-2 border border-gray-300 rounded"
      >
        <option value="">Semua</option>
        <option value="Cuti">Cuti</option>
        <option value="Sakit">Sakit</option>
      </select>
    </div>
  );
};

export default FilterBerkas;
