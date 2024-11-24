// src/pages/Pengajuan.jsx
// import React, { useState, useEffect } from 'react';
// import CardPengajuan from '../components/DaftarPengajuan/cardPengajuan';
// import FormPengajuan from './formMengajukan';

// const Pengajuan = () => {
//   const [pengajuanList, setPengajuanList] = useState([]);
//   const [successMessage, setSuccessMessage] = useState('');

//   useEffect(() => {
//     setPengajuanList([
//       {
//         nama: 'John Doe',
//         jenisPengajuan: 'Cuti',
//         tanggalMulai: '2024-12-01',
//         tanggalSelesai: '2024-12-10',
//         durasi: 10,
//       },
//       {
//         nama: 'Jane Smith',
//         jenisPengajuan: 'Sakit',
//         tanggalMulai: '2024-11-21',
//         tanggalSelesai: '2024-11-23',
//         durasi: 3,
//       },
//     ]);
//   }, []);

//   const handleAddPengajuan = (pengajuanBaru) => {
//     const startDate = new Date(pengajuanBaru.tanggalMulai);
//     const endDate = new Date(pengajuanBaru.tanggalSelesai);
//     const durasi = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

//     const pengajuanDenganDurasi = {
//       ...pengajuanBaru,
//       durasi,
//     };

//     console.log('Pengajuan baru:', pengajuanDenganDurasi);
//     setPengajuanList((prevList) => [...prevList, pengajuanDenganDurasi]);
//     setSuccessMessage('Pengajuan berhasil diajukan!');
//     setTimeout(() => setSuccessMessage(''), 3000);
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-5">Daftar Pengajuan Pegawai</h1>

//       {successMessage && (
//         <div className="mb-4 p-4 bg-[#C4DAD2] text-[#16423C] rounded-[10px]">
//           {successMessage}
//         </div>
//       )}

//       <div className="mb-8">
//         <FormPengajuan onSubmit={handleAddPengajuan} />
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         {pengajuanList.map((pengajuan, index) => (
//           <CardPengajuan key={index} {...pengajuan} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pengajuan;

// src/pages/Pengajuan.jsx
// import React, { useState, useEffect } from 'react';
// import CardPengajuan from '../components/DaftarPengajuan/cardPengajuan';
// import FormPengajuan from './formMengajukan';

// const Pengajuan = () => {
//   const [pengajuanList, setPengajuanList] = useState([]);
//   const [successMessage, setSuccessMessage] = useState('');

//   // Mengambil data pengajuan dari localStorage saat pertama kali komponen dimuat
//   useEffect(() => {
//     const savedPengajuanList = JSON.parse(localStorage.getItem('pengajuanList')) || [];
//     setPengajuanList(savedPengajuanList);
//   }, []);

//   const handleAddPengajuan = (pengajuanBaru) => {
//     const startDate = new Date(pengajuanBaru.tanggalMulai);
//     const endDate = new Date(pengajuanBaru.tanggalSelesai);
//     const durasi = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

//     const pengajuanDenganDurasi = {
//       ...pengajuanBaru,
//       durasi,
//     };

//     // Menambahkan pengajuan baru ke daftar pengajuan
//     const updatedPengajuanList = [...pengajuanList, pengajuanDenganDurasi];

//     // Menyimpan daftar pengajuan yang diperbarui ke localStorage
//     localStorage.setItem('pengajuanList', JSON.stringify(updatedPengajuanList));

//     // Update state pengajuanList
//     setPengajuanList(updatedPengajuanList);

//     // Menampilkan pesan sukses
//     setSuccessMessage('Pengajuan berhasil diajukan!');
//     setTimeout(() => setSuccessMessage(''), 3000);
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-5">Daftar Pengajuan Pegawai</h1>

//       {successMessage && (
//         <div className="mb-4 p-4 bg-[#C4DAD2] text-[#16423C] rounded-[10px]">
//           {successMessage}
//         </div>
//       )}

//       {/* <div className="mb-8">
//         <FormPengajuan onSubmit={handleAddPengajuan} />
//       </div> */}

//       <div className="grid grid-cols-2 gap-4">
//         {pengajuanList.map((pengajuan, index) => (
//           <CardPengajuan key={index} {...pengajuan} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pengajuan;

// src/pages/Pengajuan.jsx
// import React, { useState, useEffect } from 'react';
// import CardPengajuan from '../components/DaftarPengajuan/cardPengajuan';
// import SideBar from '../components/DashboardHr/sidebar'; // Pastikan kamu sudah membuat komponen SideBar
// import Header from '../components/DashboardHr/header'; // Pastikan kamu sudah membuat komponen Header
// import FilterBerkas from '../components/DaftarPengajuan/filterPengajuan';

// const Pengajuan = () => {
//   const [pengajuanList, setPengajuanList] = useState([]);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [filteredPengajuan, setFilteredPengajuan] = useState([]);
//   const [filter, setFilter] = useState('');

//   // Mengambil data pengajuan dari localStorage saat pertama kali komponen dimuat
//   useEffect(() => {
//     const savedPengajuanList = JSON.parse(localStorage.getItem('pengajuanList')) || [];
//     setPengajuanList(savedPengajuanList);
//     setFilteredPengajuan(savedPengajuanList);
//   }, []);

//   const handleFilterChange = (filterValue) => {
//     setFilter(filterValue);
//     if (filterValue === '') {
//       setFilteredPengajuan(pengajuanList); // Jika tidak ada filter, tampilkan semua pengajuan
//     } else {
//       const filtered = pengajuanList.filter((pengajuan) => pengajuan.jenisPengajuan === filterValue);
//       setFilteredPengajuan(filtered);
//     }
//   };

//   const handleAddPengajuan = (pengajuanBaru) => {
//     const startDate = new Date(pengajuanBaru.tanggalMulai);
//     const endDate = new Date(pengajuanBaru.tanggalSelesai);
//     const durasi = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

//     const pengajuanDenganDurasi = {
//       ...pengajuanBaru,
//       durasi,
//     };

//     // Menambahkan pengajuan baru ke daftar pengajuan
//     const updatedPengajuanList = [...pengajuanList, pengajuanDenganDurasi];

//     // Menyimpan daftar pengajuan yang diperbarui ke localStorage
//     localStorage.setItem('pengajuanList', JSON.stringify(updatedPengajuanList));

//     // Update state pengajuanList
//     setPengajuanList(updatedPengajuanList);

//     // Menampilkan pesan sukses
//     setSuccessMessage('Pengajuan berhasil diajukan!');
//     setTimeout(() => setSuccessMessage(''), 3000);
//   };

//   return (
//     <div className="flex">
//       <SideBar />
//       <main className="flex-1 p-10">
//         <Header />
        
//         <div className="p-5">
//           <h1 className="text-2xl font-bold mb-5">Daftar Pengajuan Pegawai</h1>

//           {successMessage && (
//             <div className="mb-4 p-4 bg-[#C4DAD2] text-[#16423C] rounded-[10px]">
//               {successMessage}
//             </div>
//           )}

//            {/* Filter Dropdown */}
//            <div className='text-center flex flex-col items-left p-4 bg-white border border-[#417D7A] rounded-md shadow-sm'>
//             <FilterBerkas  className = '' onFilterChange={handleFilterChange} />
//            </div>

//           <div className="grid grid-cols-2 gap-4">
//             {filteredPengajuan.map((pengajuan, index) => (
//               <CardPengajuan key={index} {...pengajuan} />
//             ))}
//           </div>

//           {/* Form untuk menambahkan pengajuan bisa diaktifkan dengan <FormPengajuan onSubmit={handleAddPengajuan} /> */}
//           <div className="grid grid-cols-2 gap-4">
//             {pengajuanList.map((pengajuan, index) => (
//               <CardPengajuan key={index} {...pengajuan} />
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Pengajuan;


// src/pages/Pengajuan.jsx
import React, { useState, useEffect } from 'react';
import CardPengajuan from '../components/DaftarPengajuan/cardPengajuan';
import SideBar from '../components/DashboardHr/sidebar';
import Header from '../components/DashboardHr/header';
import FilterBerkas from '../components/DaftarPengajuan/filterPengajuan';

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
      <main className="flex-1 p-10">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold mb-5">Daftar Pengajuan Pegawai</h1>

          {successMessage && (
            <div className="mb-4 p-4 bg-[#C4DAD2] text-[#16423C] rounded-[10px]">
              {successMessage}
            </div>
          )}

          {/* Filter Dropdown */}
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

          {/* Form untuk menambahkan pengajuan bisa diaktifkan dengan <FormPengajuan onSubmit={handleAddPengajuan} /> */}
        </div>
      </main>
    </div>
  );
};

export default Pengajuan;
