import React, { useState, useEffect } from 'react';
import CardPengajuan from '../../components/DaftarPengajuan/cardPengajuan';
import SideBar from '../../components/DashboardHr/sidebar';
import Header from '../../components/DashboardHr/header';
import FilterBerkas from '../../components/DaftarPengajuan/filterPengajuan';

const Pengajuan = () => {
  const [pengajuanList, setPengajuanList] = useState([]);
  const [approvedList, setApprovedList] = useState([]); 
  const [rejectedList, setRejectedList] = useState([]);
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

  const handleApprove = (index) => {
    const updatedPengajuanList = [...pengajuanList];
    const approvedPengajuan = updatedPengajuanList[index];
    approvedPengajuan.status = 'Disetujui';
  
    const updatedApprovedList = [...approvedList, approvedPengajuan];
    setApprovedList(updatedApprovedList);
  
    updatedPengajuanList.splice(index, 1);
    setPengajuanList(updatedPengajuanList);
  
    const updatedFilteredPengajuan = updatedPengajuanList.filter((pengajuan) =>
      filter === '' ? true : pengajuan.jenisPengajuan === filter
    );
    setFilteredPengajuan(updatedFilteredPengajuan);
  
    localStorage.setItem('pengajuanList', JSON.stringify(updatedPengajuanList));
    localStorage.setItem('approvedList', JSON.stringify(updatedApprovedList));
    setSuccessMessage('Pengajuan disetujui');
  };
  
  const handleReject = (index) => {
    const updatedPengajuanList = [...pengajuanList];
    const rejectedPengajuan = updatedPengajuanList[index];
    rejectedPengajuan.status = 'Ditolak';
  
    const updatedRejectedList = [...rejectedList, rejectedPengajuan];
    setRejectedList(updatedRejectedList);
  
    updatedPengajuanList.splice(index, 1);
    setPengajuanList(updatedPengajuanList);
  
    const updatedFilteredPengajuan = updatedPengajuanList.filter((pengajuan) =>
      filter === '' ? true : pengajuan.jenisPengajuan === filter
    );
    setFilteredPengajuan(updatedFilteredPengajuan);
  
    localStorage.setItem('pengajuanList', JSON.stringify(updatedPengajuanList));
    localStorage.setItem('rejectedList', JSON.stringify(updatedRejectedList));
    setSuccessMessage('Pengajuan ditolak');
  };
  
  
  useEffect(() => {
    const savedPengajuanList = JSON.parse(localStorage.getItem('pengajuanList')) || [];
    const savedApprovedList = JSON.parse(localStorage.getItem('approvedList')) || [];
    const savedRejectedList = JSON.parse(localStorage.getItem('rejectedList')) || [];
    
    setPengajuanList(savedPengajuanList);
    setApprovedList(savedApprovedList);
    setRejectedList(savedRejectedList);
    setFilteredPengajuan(savedPengajuanList); 
  }, []);
  

  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 p-10 ml-64 font-poppins">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl text-tertiary font-bold mb-5">Daftar Pengajuan Pegawai</h1>

          <div className='flex justify-between mb-4 text-tertiary '>
            <div className='flex-grow'>
              <FilterBerkas onFilterChange={handleFilterChange} />
            </div>
          </div>

          <h2 className="text-xl text-tertiary font-bold mb-4">
            Pengajuan yang sedang diproses
          </h2>

          {filteredPengajuan.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {filteredPengajuan.map((pengajuan, index) => (
                <CardPengajuan
                  key={index}
                  {...pengajuan}
                  onApprove={() => handleApprove(index)}
                  onReject={() => handleReject(index)}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Tidak ada pengajuan yang sedang diproses.</p>
          )}

          <h2 className="text-xl text-tertiary font-bold mb-4 mt-10">Pengajuan yang telah di proses</h2>
          <table className="w-full text-left border-collapse">
          <thead className="p-2 border-b bg-primary text-secondary">
            <tr>
              <th className="p-2 border-b text-secondary">Nama</th>
              <th className="p-2 border-b text-secondary">Jenis Pengajuan</th>
              <th className="p-2 border-b text-secondary">Tanggal Pengajuan</th>
              <th className="p-2 border-b text-secondary">Status</th>
            </tr>
          </thead>
          <tbody>
            {approvedList.map((pengajuan, index) => (
              <tr key={`approved-${index}`}>
                <td className="p-3 text-left">{pengajuan.nama}</td>
                <td className="p-3 text-left">{pengajuan.jenisPengajuan}</td>
                <td className="p-3 text-left">{pengajuan.tanggalPengajuan}</td>
                <td className="p-3 text-left text-green-600">Disetujui</td>
              </tr>
            ))}

            {rejectedList.map((pengajuan, index) => (
              <tr key={`rejected-${index}`}>
                <td className="p-3 text-left">{pengajuan.nama}</td>
                <td className="p-3 text-left">{pengajuan.jenisPengajuan}</td>
                <td className="p-3 text-left">{pengajuan.tanggalPengajuan}</td>
                <td className="p-3 text-left text-red-600">Ditolak</td>
              </tr>
            ))}
          </tbody>
        </table>

        </div>
      </main>
    </div>
  );
};

export default Pengajuan;