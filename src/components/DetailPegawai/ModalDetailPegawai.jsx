import React from "react";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

function ModalDetailPegawai({ data, onClose }) {
    if (!data) return null; 

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[80%] h-[90%] relative">
                <button onClick={onClose} className="absolute top-2 left-2 text-gray-500">
                    ✖️ 
                </button>
                
                <div className="flex flex-col items-start mb-4 mt-6 bg-white border border-gray-500 rounded-[10px] shadow-md ">
                    <div className="flex space-x-2 mt-6 ml-8">
                        <span className="px-2 py-1 bg-yellow-200 text-gray-700 rounded-[10px]">{data.posisi}</span>
                        <span className="px-2 py-1 bg-green-200 text-green-700 rounded-[10px]">{data.status}</span>
                    </div>
                    <h2 className="text-2xl text-[#16423C] font-bold mt-2 ml-8">{data.nama}</h2>
                    <p className="text-md font-regular text-[#16423C] mt-2 ml-8 mb-5"> Lahir: {data.lahir}</p>
                    <p className="text-md font-regular text-blue-500 mt-2 ml-8 mb-2">ID: {data.id}</p>
                </div>

                <div className="flex flex-col items-start mb-4 mt-4 bg-white border border-gray-500 rounded-[10px] shadow-md">
                    <div className="mt-2 ml-4 mb-2  text-[#16423C] p-4 rounded-md">
                        <div className="flex items-center mb-2 ">
                            <MdEmail className="h-7 w-7 mr-8 text-[#417D7A]" />
                            <p className="flex-1">{data.email}</p>
                            <FaPhoneVolume className="h-6 w-6 mr-8 ml-48 text-[#417D7A]" />
                            <p>{data.phone}</p>
                        </div>
                        <div className="flex items-center mt-6">
                            <MdLocationPin className="h-7 w-7 mr-8 text-[#417D7A]" />
                            <p>{data.location}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mb-4 mt-4 bg-white border border-gray-500 rounded-[10px] shadow-md">
                    <div className="flex space-x-2 mt-4 ml-8">
                        <span className="px-2 py-1 border border-gray-500 text-[#16423C] rounded-[10px]">Bulan</span>
                        <span className="px-2 py-1  border border-gray-500 text-[#16423C] rounded-[10px]">Tahun</span>
                    </div>
                    <div className="flex space-x-2 ml-8 mt-4 grid grid-cols-3 gap-2 items-start text-[#16423C]">
                        <div>Sisa Cuti: {data.sisaCuti}</div>
                        <div>Kehadiran: {data.kehadiran}</div>
                        <div>Tidak Hadir: {data.tidakHadir}</div>
                    </div>
                </div>

                <div className="flex flex-col mb-4 mt-4 bg-[#C4DAD2] border border-gray-500 rounded-[10px] shadow-md">
                    <span className="text-[#417D7A] ml-8">Riwayat</span>
                </div>
            </div>
        </div>
    );
}

export default ModalDetailPegawai;
