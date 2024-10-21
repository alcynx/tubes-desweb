// AttendanceTable.jsx
import React from 'react';

const AttendanceTable = ({ attendanceData }) => {
    return (
        <table className="w-full text-left border-collapse">
            <thead>
                <tr>
                    <th className="p-2 border-b">Tanggal</th>
                    <th className="p-2 border-b">Nama</th>
                    <th className="p-2 border-b">Jabatan</th>
                    <th className="p-2 border-b">Status</th>
                    <th className="p-2 border-b">Masuk</th>
                    <th className="p-2 border-b">Keluar</th>
                    <th className="p-2 border-b">Lembur</th>
                </tr>
            </thead>
            <tbody>
                {attendanceData.map((item, index) => (
                    <tr key={index}>
                        <td className="p-2 border-b">{item.date}</td>
                        <td className="p-2 border-b">{item.name}</td>
                        <td className="p-2 border-b">{item.role}</td>
                        <td className={`p-2 border-b ${item.status === 'Terlambat' ? 'text-yellow-500' : item.status === 'Absen' ? 'text-red-500' : 'text-green-500'}`}>
                            {item.status}
                        </td>
                        <td className="p-2 border-b">{item.masuk}</td>
                        <td className="p-2 border-b">{item.keluar}</td>
                        <td className="p-2 border-b">{item.lembur}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AttendanceTable;
