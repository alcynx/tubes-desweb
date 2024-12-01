import React from "react";

function TablePegawai({ data, onRowClick }) {
    return (
        <table className="w-full border-collapse">
            <thead>
                <tr className="border-b bg-[#16423C] text-white text-left">
                    <th className="p-2 bg-[#C4DAD2] text-[#417D7A]">Nama</th>
                    <th className="p-2 bg-[#C4DAD2] text-[#417D7A]">Posisi</th>
                    <th className="p-2 bg-[#C4DAD2] text-[#417D7A]">Status</th>
                    <th className="p-2 bg-[#C4DAD2] text-[#417D7A]">ID</th>
                    <th className="p-2 bg-[#C4DAD2] text-[#417D7A]">Sisa Cuti</th>
                </tr>
            </thead>
            <tbody>
                {data.map((pegawai) => (
                    <tr 
                        key={pegawai.id} 
                        className="text-left border-b cursor-pointer hover:bg-gray-100"
                        onClick={() => onRowClick(pegawai)}
                    >
                        <td className="p-2 text-secondary">{pegawai.nama}</td>
                        <td className="p-2 text-secondary">{pegawai.posisi}</td>
                        <td className="p-2 text-secondary">{pegawai.status}</td>
                        <td className="p-2 text-secondary">{pegawai.id}</td>
                        <td className="p-2 text-secondary">{pegawai.sisaCuti}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TablePegawai;
