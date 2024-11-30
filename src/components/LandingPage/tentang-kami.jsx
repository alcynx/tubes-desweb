import React from 'react';

const TentangKami = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 px-5 font-poppins -mt-8">
      <h2 className="text-center text-3xl font-extrabold text-secondary mb-10">
        Tentang <span className="text-tertiary">Kami</span>
      </h2>
      <div className="text-tertiary flex flex-row items-center ml-4 space-x-6">
        <div className="flex-shrink-0">
          <img src="/images/logo.png" alt="LOGO" className="w-[140px] h-auto object-contain" />
        </div>
        <div className="text-tertiary text-center lg:text-left">
          <p className="leading-relaxed text-md text-justify mr-5 p-5">
            Staff.io adalah solusi modern yang dirancang khusus untuk membantu perusahaan dalam mengelola kehadiran
            dan absensi pegawai secara efektif. Dengan fokus pada kebutuhan HR, Staff.io memberikan kemudahan dalam
            mencatat kehadiran, cuti, dan lembur karyawan, sehingga semua data kepegawaian dapat dikelola secara
            terpusat dan akurat. Oleh karena itu, Staff.io hadir dengan fitur-fitur yang memudahkan HR untuk mengontrol
            absensi harian, melihat rekap kehadiran bulanan, serta mengelola pengajuan cuti dan lembur dengan cepat.
            Semua itu dilakukan melalui platform berbasis web yang user-friendly, responsif, dan dapat diakses kapan
            saja, di mana saja.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
