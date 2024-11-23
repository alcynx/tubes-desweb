import React from "react";
import { FaUser, FaCheck, FaTimes } from "react-icons/fa"; 

function ModalDetailPegawai({ data, onClose }) {
    if (!data) return null; // If no data, don't show anything

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[80%]  h-[70%] relative">
                <button onClick={onClose} className="absolute top-2 left-2 text-gray-500">
                    ✖️ {/* Icon to close modal */}
                </button>
                
                {/* Header with Name, Position, Status */}
                <div className="flex flex-col items-start mb-4 mt-6 bg-white border border-gray-500 rounded-[10px] shadow-md ">
                    <div className="flex space-x-2 mt-6 ml-8">
                        <span className="px-2 py-1 bg-yellow-200 text-gray-700 rounded-[10px]">{data.posisi}</span>
                        <span className="px-2 py-1 bg-green-200 text-green-700 rounded-[10px]">{data.status}</span>
                    </div>
                    <h2 className="text-2xl text-[#16423C] font-bold mt-2 ml-8">{data.nama}</h2>
                    <p className="text-md font-regular text-black mt-2 ml-8 mb-10"> Lahir: {data.lahir}</p>
                    <p className="text-md font-regular text-blue-500 mt-2 ml-8 mb-2">ID: {data.id}</p>
                </div>


                {/* Other details */}
                <div className="flex flex-col items-start mb-4 mt-6 bg-white border border-gray-500 rounded-[10px] shadow-md">
                    <div className="mt-4 ml-4 mb-6  text-black p-4 rounded-md">
                        <div className="flex items-center mb-2 ">
                            <FaUser className="h-5 w-5 mr-8" />
                            <p className="flex-1">{data.email}</p>
                            <FaCheck className="h-5 w-5 mr-8 ml-48" />
                            <p>{data.phone}</p>
                        </div>
                        <div className="flex items-center mt-6">
                            <FaTimes className="h-5 w-5 mr-8" />
                            <p>{data.location}</p>
                        </div>
                    </div>
                </div>

                {/* Sisa Cuti, Kehadiran, etc */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div>Sisa Cuti: {data.sisaCuti}</div>
                    <div>Kehadiran: {data.kehadiran}</div>
                    <div>Tidak Hadir: {data.tidakHadir}</div>
                </div>

                {/* History Table */}
            </div>
        </div>
    );
}

export default ModalDetailPegawai;
