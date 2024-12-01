import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ConfirmationModal = ({ status, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[100] h-[50]">
        <h2 className="text-lg font-bold text-[#16423C] mb-6 mt-4">Konfirmasi Publikasi!</h2>
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="h-12 w-12 text-[#16423C]" />
        </div>
        <p className="text-gray-700 mb-2 mt-8">
          Apakah Anda yakin ingin menyimpan pengumuman ini sebagai{" "}
          <strong>{status === "public" ? "Public" : "Draft"}</strong>?
        </p>
        <p className="text-[12px] text-gray-500 mb-10">
            Menyetujui untuk melakukan mempublikasi, anda telah memastikan bahwa hal yang dipublikasikan
            tidak memiliki hal yang melanggar komunitas.
          </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="bg-[#E0223F] text-white px-4 py-2 rounded-[60px] hover:bg-[#FFAAAA] "
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="bg-[#C4DAD2] text-[#16423C] px-4 py-2 rounded-[60px] hover:bg-[#16423C] hover:text-white"
          >
            Publikasikan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
