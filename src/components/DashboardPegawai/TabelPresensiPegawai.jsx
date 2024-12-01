import React from 'react';

const AttendanceTablePegawai = ({ attendanceData }) => {
    const filteredData = attendanceData.filter(item => item.name === 'Nabila Chairunnisa');

    return (
        <table className="w-full text-left border-collapse">
            <thead className="p-2 border-b bg-primary text-secondary">
                <tr>
                    <th className="p-2 border-b text-secondary">Tanggal</th>
                    <th className="p-2 border-b text-secondary">Status</th>
                    <th className="p-2 border-b text-secondary">Lembur</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((item, index) => (
                    <tr key={index} className="">
                        <td className="p-3 text-left">{item.date}</td>
                        <td className={`p-3 text-left ${item.status === 'Terlambat' ? 'text-yellow-500' : item.status === 'Absen' ? 'text-redstat' : 'text-greenstat'}`}>
                            {item.status}
                        </td>
                        <td className="p-3 text-center">{item.lembur ? item.lembur : '-'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AttendanceTablePegawai;
