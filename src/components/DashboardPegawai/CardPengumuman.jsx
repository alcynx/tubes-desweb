import React from 'react';

const Announcements = () => {
  return (
    <section className="w-1/3">
      <h2 className="text-xl font-bold mb-5">Pengumuman</h2>
      <div className="border p-5 rounded-lg mb-5">
        <h3 className="font-bold">Peraturan Presensi Terbaru</h3>
        <p>Staff.io memberlakukan peraturan presensi terbaru untuk para pegawai</p>
        <p className="text-right">30/05/24</p>
      </div>
      <div className="border p-5 rounded-lg mb-5">
        <h3 className="font-bold">Mekanisme pengajuan</h3>
        <p>Staff.io memberikan mekanisme berbeda untuk pegawai dalam ...</p>
        <p className="text-right">30/05/24</p>
      </div>
      <p className="text-right text-blue-500">Selengkapnya...</p>
    </section>
  );
};

export default Announcements;
