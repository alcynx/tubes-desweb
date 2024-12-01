import React, { useState, useEffect } from 'react';
import CardPengajuan from '../../components/DaftarPengajuan/cardPengajuan';
import SideBar from '../../components/DashboardHr/sidebar';
import Header from '../../components/DashboardHr/header';
import FilterBerkas from '../../components/DaftarPengajuan/filterPengajuan';

const Pengajuan = () => {
  const [pengajuanList, setPengajuanList] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [filteredPengajuan, setFilteredPengajuan] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedPengajuanList = JSON.parse(localStorage.getItem('pengajuanList')) || [];
    setPengajuanList(savedPengajuanList);
    setFilteredPengajuan(savedPengajuanList);
  }, []);

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
    if (filterValue === '') {
      setFilteredPengajuan(pengajuanList);
    } else {
      const filtered = pengajuanList.filter((pengajuan) => pengajuan.jenisPengajuan === filterValue);
      setFilteredPengajuan(filtered);
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 p-10 ml-64">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold mb-5">Daftar Pengajuan Pegawai</h1>

          {successMessage && (
            <div className="mb-4 p-4 bg-[#C4DAD2] text-[#16423C] rounded-[10px]">
              {successMessage}
            </div>
          )}

          <div className='flex justify-between mb-4'>
            <div className='flex-grow'>
              <FilterBerkas onFilterChange={handleFilterChange} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {filteredPengajuan.map((pengajuan, index) => (
              <CardPengajuan key={index} {...pengajuan} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pengajuan;
