import React from 'react';

const AttendanceTablePegawai = ({ attendanceData }) => {
    return (
        <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
            <thead className="bg-greenstat text-white">
                <tr>
                    <th className="p-3">Tanggal</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Lembur</th>
                </tr>
            </thead>
            <tbody>
                {attendanceData.map((item, index) => (
                    <tr key={index} className="even:bg-gray-100">
                        <td className="p-3 border-b">{item.date}</td>
                        <td className={`p-3 border-b ${item.status === 'Terlambat' ? 'text-yellowstat' : item.status === 'Absen' ? 'text-redstat' : 'text-greenstat'}`}>
                            {item.status}
                        </td>
                        <td className="p-3 border-b">{item.lembur ? item.lembur : '-'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AttendanceTablePegawai;
