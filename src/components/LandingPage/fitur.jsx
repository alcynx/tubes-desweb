import React from 'react';

const Fitur = () => {
  return (
    <div className="text-tertiary max-w-6xl mx-auto py-12 px-4 font-poppins">
      <h2 className="text-center text-tertiary text-3xl font-extrabold mb-12">
        Fitur By <span className="text-secondary">STAFF.IO</span>
      </h2>
      <div className="">
          <div className="flex text-tertiary items-center ">
            <img src='/images/absensi.png' alt='absensi' className="w-[300px] object-contain pr-4 mr-4" />
            <div>
              <h3 className="text-xl  font-bold mb-2 font-poppins pl-5 ">Efisiensi Absensi</h3>
              <p className="font-poppins pl-5">Cek kehadiran pegawai secara real-time dan akurat</p>
            </div>
          </div>
          <div className="flex text-tertiary items-center justify-end ">
            <div>
              <h3 className="text-xl font-bold mb-2 font-poppins pl-5">Kemudahan Pengajuan</h3>
              <p className="font-poppins pl-5">Pegawai dapat mengajukan izin, sakit, dan cuti dengan mudah</p>
            </div>
            <img src='/images/pengajuan.png' alt='absensi' className="w-[300px] object-contain mr-6" />
          </div>
          <div className="flex text-tertiary items-center ">
            <img src='/images/pengumuman.png' alt='absensi' className="w-[300px] object-contain mr-6" />
            <div>
              <h3 className="text-xl font-bold mb-2 font-poppins pl-5">Pengumuman</h3>
              <p className="font-poppins pl-5">Setiap pegawai akan mendapatkan pengumuman langsung</p>
            </div>
          </div>
          <div className="flex text-tertiary items-center justify-end">
            <div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Efisiensi Absensi</h3>
              <p className="font-poppins ">Cek kehadiran pegawai secara real-time dan akurat</p>
            </div>
            <img src='/images/absensi.png' alt='absensi' className="w-[300px] object-contain mr-6" />
          </div>
        
      </div>
    </div>
  );
};

export default Fitur;
