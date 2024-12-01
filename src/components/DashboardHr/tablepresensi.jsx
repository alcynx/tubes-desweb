import React from 'react';

const AttendanceTable = ({ attendanceData }) => {
    return (
        <table className="w-full text-left border-collapse">
            <thead>
                <tr>
                    <th className="p-2 border-b bg-[#C4DAD2] text-[#417D7A]">TANGGAL</th>
                    <th className="p-2 border-b bg-[#C4DAD2] text-[#417D7A]">NAMA</th>
                    <th className="p-2 border-b bg-[#C4DAD2] text-[#417D7A]">JABATAN</th>
                    <th className="p-2 border-b bg-[#C4DAD2] text-[#417D7A]">STATUS</th>
                    <th className="p-2 border-b bg-[#C4DAD2] text-[#417D7A]">MASUK</th>
                    <th className="p-2 border-b bg-[#C4DAD2] text-[#417D7A]">KELUAR</th>
                    <th className="p-2 border-b bg-[#C4DAD2] text-[#417D7A]">LEMBUR</th>
                </tr>
            </thead>
            <tbody>
                {attendanceData.map((item, index) => (
                    <tr key={index}>
                        <td className="p-2 border-b text-[#417D7A]">{item.date}</td>
                        <td className="p-2 border-b text-[#417D7A]">{item.name}</td>
                        <td className="p-2 border-b text-[#417D7A]">{item.role}</td>
                        <td className={`p-2 border-b ${item.status === 'Terlambat' ? 'text-yellow-500' : item.status === 'Absen' ? 'text-red-500' : 'text-green-500'}`}>
                            {item.status}
                        </td>
                        <td className="p-2 border-b text-[#417D7A]">{item.masuk}</td>
                        <td className="p-2 border-b text-[#417D7A]">{item.keluar}</td>
                        <td className="p-2 border-b text-[#417D7A]">{item.lembur}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AttendanceTable;
