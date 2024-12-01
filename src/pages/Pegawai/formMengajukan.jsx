import React, { useState, useEffect } from "react";
import SidebarPegawai from "../../components/DashboardPegawai/SidebarPegawai";

const FormPengajuan = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nama: "",
    jenisPengajuan: "",
    tanggalPengajuan: "",
    tanggalMulai: "",
    tanggalSelesai: "",
    durasi: "",
  });

  useEffect(() => {
    const storedPengajuan = JSON.parse(localStorage.getItem("pengajuanList")) || [];
    if (storedPengajuan.length > 0) {
      setFormData(storedPengajuan[storedPengajuan.length - 1]);
    }
  }, []); 


  const calculateDurasi = () => {
    if (formData.tanggalMulai && formData.tanggalSelesai) {
      const startDate = new Date(formData.tanggalMulai);
      const endDate = new Date(formData.tanggalSelesai);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(0, 0, 0, 0);
      const timeDifference = endDate - startDate;
      let days = timeDifference / (1000 * 3600 * 24) + 1;

      setFormData((prevData) => ({
        ...prevData,
        durasi: days >= 0 ? days : 0,
      }));
    }
  };

  useEffect(() => {
    calculateDurasi();
  }, [formData.tanggalMulai, formData.tanggalSelesai]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pengajuan = {
      ...formData,
      status: "Menunggu Persetujuan",
    };
    const pengajuanList = JSON.parse(localStorage.getItem("pengajuanList")) || [];
    pengajuanList.push(pengajuan);
    localStorage.setItem("pengajuanList", JSON.stringify(pengajuanList));
    if (onSubmit && typeof onSubmit === "function") {
      onSubmit(formData);
    }
    setFormData({
      nama: "",
      jenisPengajuan: "",
      tanggalPengajuan: "",
      tanggalMulai: "",
      tanggalSelesai: "",
      durasi: "",
    });
    alert("Pengajuan berhasil disimpan!");
  };

  return (
    <div className="flex">
      <SidebarPegawai />

      <div className="flex-1 p-10 bg-gray-100 ml-64 font-poppins">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md border border-[#417D7A]">
          <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">Form Pengajuan</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium text-gray-600 mb-2">Nama</label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className="w-full p-3 border border-[#417D7A] rounded focus:ring focus:ring-green-200"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-600 mb-2">Jenis Pengajuan</label>
              <select
                name="jenisPengajuan"
                value={formData.jenisPengajuan}
                onChange={handleChange}
                className="w-full p-3 border border-[#417D7A] rounded focus:ring focus:ring-green-200"
              >
                <option value="">Pilih jenis pengajuan</option>
                <option value="Sakit">Sakit</option>
                <option value="Cuti">Cuti</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-gray-600 mb-2">Tanggal Pengajuan</label>
              <input
                type="date"
                name="tanggalPengajuan"
                value={formData.tanggalPengajuan}
                onChange={handleChange}
                className="w-full p-3 border border-[#417D7A] rounded focus:ring focus:ring-green-200"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-600 mb-2">Tanggal Mulai</label>
              <input
                type="date"
                name="tanggalMulai"
                value={formData.tanggalMulai}
                onChange={handleChange}
                className="w-full p-3 border border-[#417D7A] rounded focus:ring focus:ring-green-200"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-600 mb-2">Tanggal Selesai</label>
              <input
                type="date"
                name="tanggalSelesai"
                value={formData.tanggalSelesai}
                onChange={handleChange}
                className="w-full p-3 border border-[#417D7A] rounded focus:ring focus:ring-green-200"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-600 mb-2">Durasi (Hari)</label>
              <input
                type="number"
                name="durasi"
                value={formData.durasi}
                onChange={handleChange}
                className="w-full p-3 border border-[#417D7A] rounded bg-gray-200 focus:outline-none"
                readOnly
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#16423C] text-white py-3 rounded hover:bg-[#C4DAD2] hover:text-[#16423C] transition"
            >
              Ajukan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPengajuan;
