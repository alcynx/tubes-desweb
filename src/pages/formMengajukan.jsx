// import React, { useState, useEffect } from 'react';

// const FormPengajuan = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     nama: '',
//     jenisPengajuan: '',
//     tanggalPengajuan: '',
//     tanggalMulai: '',
//     tanggalSelesai: '',
//     durasi: '',
//   });

//   // Fungsi untuk menghitung durasi
//   const calculateDurasi = () => {
//     if (formData.tanggalMulai && formData.tanggalSelesai) {
//       const startDate = new Date(formData.tanggalMulai);
//       const endDate = new Date(formData.tanggalSelesai);
  
//       // Set waktu ke tengah malam untuk memastikan hanya tanggal yang dihitung
//       startDate.setHours(0, 0, 0, 0);
//       endDate.setHours(0, 0, 0, 0);
  
//       // Selisih dalam milidetik
//       const timeDifference = endDate - startDate;
  
//       // Hitung durasi dalam hari (1 hari = 86400000 ms)
//       let days = timeDifference / (1000 * 3600 * 24) +1;
  
//       // Mengurangi 1 untuk durasi yang tepat
//       if (days >= 0) {
//         setFormData((prevData) => ({
//           ...prevData,
//           durasi: days, // Durasi sudah sesuai sekarang
//         }));
//       } else {
//         setFormData((prevData) => ({
//           ...prevData,
//           durasi: 0, // Jika tidak valid, durasi 0
//         }));
//       }
//     }  
//   };

//   // Menambahkan useEffect untuk menghitung durasi otomatis
//   useEffect(() => {
//     calculateDurasi();
//   }, [formData.tanggalMulai, formData.tanggalSelesai]); // Setiap tanggalMulai atau tanggalSelesai berubah, durasi dihitung ulang

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSubmit && typeof onSubmit === 'function') {
//       onSubmit(formData); // Mengirim formData ke parent atau komponen yang meng-handle submit
//     } else {
//       console.error('onSubmit is not a function');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block">Nama</label>
//         <input
//           type="text"
//           name="nama"
//           value={formData.nama}
//           onChange={handleChange}
//           className="border rounded w-full p-2"
//         />
//       </div>
//       <div>
//         <label className="block">Jenis Pengajuan</label>
//         <select
//           name="jenisPengajuan"
//           value={formData.jenisPengajuan}
//           onChange={handleChange}
//           className="border rounded w-full p-2"
//         >
//           <option value="Sakit">Sakit</option>
//           <option value="Cuti">Cuti</option>
//         </select>
//       </div>
//       <div>
//         <label className="block">Tanggal Pengajuan</label>
//         <input
//           type="date"
//           name="tanggalPengajuan"
//           value={formData.tanggalPengajuan}
//           onChange={handleChange}
//           className="border rounded w-full p-2"
//         />
//       </div>
//       <div>
//         <label className="block">Tanggal Mulai</label>
//         <input
//           type="date"
//           name="tanggalMulai"
//           value={formData.tanggalMulai}
//           onChange={handleChange}
//           className="border rounded w-full p-2"
//         />
//       </div>
//       <div>
//         <label className="block">Tanggal Selesai</label>
//         <input
//           type="date"
//           name="tanggalSelesai"
//           value={formData.tanggalSelesai}
//           onChange={handleChange}
//           className="border rounded w-full p-2"
//         />
//       </div>
//       <div>
//         <label className="block">Durasi (Hari)</label>
//         <input
//           type="number"
//           name="durasi"
//           value={formData.durasi}
//           onChange={handleChange}
//           className="border rounded w-full p-2"
//           readOnly
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Ajukan
//       </button>
//     </form>
//   );
// };

// export default FormPengajuan;

import React, { useState, useEffect } from 'react';

const FormPengajuan = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nama: '',
    jenisPengajuan: '',
    tanggalPengajuan: '',
    tanggalMulai: '',
    tanggalSelesai: '',
    durasi: '',
  });

  // Step 1: Menambahkan useEffect untuk membaca data dari localStorage saat komponen dimuat
  useEffect(() => {
    const storedPengajuan = JSON.parse(localStorage.getItem('pengajuanList')) || [];
    if (storedPengajuan.length > 0) {
      setFormData(storedPengajuan[storedPengajuan.length - 1]); // Ambil pengajuan terakhir
    }
  }, []); // Hanya dijalankan sekali ketika komponen pertama kali dimuat

  // Fungsi untuk menghitung durasi
  const calculateDurasi = () => {
    if (formData.tanggalMulai && formData.tanggalSelesai) {
      const startDate = new Date(formData.tanggalMulai);
      const endDate = new Date(formData.tanggalSelesai);

      // Set waktu ke tengah malam untuk memastikan hanya tanggal yang dihitung
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(0, 0, 0, 0);

      // Selisih dalam milidetik
      const timeDifference = endDate - startDate;

      // Hitung durasi dalam hari (1 hari = 86400000 ms)
      let days = timeDifference / (1000 * 3600 * 24) + 1;

      // Mengurangi 1 untuk durasi yang tepat
      if (days >= 0) {
        setFormData((prevData) => ({
          ...prevData,
          durasi: days, // Durasi sudah sesuai sekarang
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          durasi: 0, // Jika tidak valid, durasi 0
        }));
      }
    }  
  };

  // Menambahkan useEffect untuk menghitung durasi otomatis
  useEffect(() => {
    calculateDurasi();
  }, [formData.tanggalMulai, formData.tanggalSelesai]); // Setiap tanggalMulai atau tanggalSelesai berubah, durasi dihitung ulang

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simpan pengajuan ke localStorage
    const pengajuan = {
      ...formData,
      status: 'Menunggu Persetujuan', // Status default saat pengajuan baru
    };

    // Ambil daftar pengajuan yang ada dari localStorage atau array kosong jika tidak ada
    const pengajuanList = JSON.parse(localStorage.getItem('pengajuanList')) || [];
    pengajuanList.push(pengajuan); // Menambahkan pengajuan baru ke daftar

    // Menyimpan daftar pengajuan ke localStorage
    localStorage.setItem('pengajuanList', JSON.stringify(pengajuanList)); 

    // Jika ada fungsi onSubmit, panggil dengan formData
    if (onSubmit && typeof onSubmit === 'function') {
      onSubmit(formData); // Mengirim formData ke parent atau komponen yang meng-handle submit
    }

    // Reset form setelah pengajuan disubmit
    setFormData({
      nama: '',
      jenisPengajuan: '',
      tanggalPengajuan: '',
      tanggalMulai: '',
      tanggalSelesai: '',
      durasi: '',
    });

    alert('Pengajuan berhasil disimpan!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Nama</label>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          className="border rounded w-full p-2"
        />
      </div>
      <div>
        <label className="block">Jenis Pengajuan</label>
        <select
          name="jenisPengajuan"
          value={formData.jenisPengajuan}
          onChange={handleChange}
          className="border rounded w-full p-2"
        >
          <option value="Sakit">Sakit</option>
          <option value="Cuti">Cuti</option>
        </select>
      </div>
      <div>
        <label className="block">Tanggal Pengajuan</label>
        <input
          type="date"
          name="tanggalPengajuan"
          value={formData.tanggalPengajuan}
          onChange={handleChange}
          className="border rounded w-full p-2"
        />
      </div>
      <div>
        <label className="block">Tanggal Mulai</label>
        <input
          type="date"
          name="tanggalMulai"
          value={formData.tanggalMulai}
          onChange={handleChange}
          className="border rounded w-full p-2"
        />
      </div>
      <div>
        <label className="block">Tanggal Selesai</label>
        <input
          type="date"
          name="tanggalSelesai"
          value={formData.tanggalSelesai}
          onChange={handleChange}
          className="border rounded w-full p-2"
        />
      </div>
      <div>
        <label className="block">Durasi (Hari)</label>
        <input
          type="number"
          name="durasi"
          value={formData.durasi}
          onChange={handleChange}
          className="border rounded w-full p-2"
          readOnly
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Ajukan
      </button>
    </form>
  );
};

export default FormPengajuan;
