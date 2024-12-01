import React from 'react';

const FormComponent = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-8 rounded-lg w-1/2">
        <button className="absolute top-4 right-4 text-xl" onClick={onClose}>&times;</button>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Jabatan</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Periode Awal</label>
            <input type="date" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Periode Akhir</label>
            <input type="date" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Jam Mulai</label>
            <input type="time" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Jam Selesai</label>
            <input type="time" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Hari Kerja</label>
            <div className="flex flex-wrap">
              <label className="mr-4"><input type="checkbox" className="mr-2" /> Senin</label>
              <label className="mr-4"><input type="checkbox" className="mr-2" /> Selasa</label>
              <label className="mr-4"><input type="checkbox" className="mr-2" /> Rabu</label>
              <label className="mr-4"><input type="checkbox" className="mr-2" /> Kamis</label>
              <label className="mr-4"><input type="checkbox" className="mr-2" /> Jumat</label>
              <label className="mr-4"><input type="checkbox" className="mr-2" /> Semua</label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Hari Libur</label>
            <div className="flex flex-wrap">
              <label className="mr-4"><input type="checkbox" className="mr-2" /> Sabtu</label>
              <label className="mr-4"><input type="checkbox" className="mr-2" /> Minggu</label>
              <label className="mr-4"><input type="checkbox" className="mr-2" /> Semua</label>
            </div>
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">Simpan</button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
