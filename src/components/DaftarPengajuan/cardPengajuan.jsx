import React from 'react';

const CardPengajuan = ({ nama, jenisPengajuan, tanggalPengajuan, tanggalMulai, tanggalSelesai, durasi }) => {
  return (
    <div className="bg-[#C4DAD2] p-5 rounded-[10px] shadow-md">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-[#16423C]">{nama}</h2>
        <span className="text-sm text-[#16423C]">{jenisPengajuan}</span>
      </div>
      <p className="text-sm font-bold mb-3 text-[#16423C]">{tanggalPengajuan} </p>
      <p className="text-sm font-bold mb-3 text-[#16423C]">{durasi} Hari</p>
      <div className="flex justify-between mb-3">
        <span className="text-sm text-[#16423C]"> from: {tanggalMulai}</span>
        <span className="text-sm text-[#16423C]">to: {tanggalSelesai}</span>
      </div>
      <div className="flex justify-between">
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg">Setujui</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Tolak</button>
      </div>
    </div>
  );
};

export default CardPengajuan;
