import React, { useState } from "react";
import HeaderHR from "../../components/DashboardHr/header";
import Sidebar from "../../components/DashboardHr/sidebar";
import TablePegawai from "../../components/DetailPegawai/tablepegawai";
import ModalDetailPegawai from "../../components/DetailPegawai/ModalDetailPegawai";
import dataPegawai from "../../components/DetailPegawai/dataparapegawai";

function DataPegawai() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPegawai, setSelectedPegawai] = useState(null);

    const filteredData = dataPegawai.filter((pegawai) =>
        pegawai.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleRowClick = (pegawai) => {
        setSelectedPegawai(pegawai);
    };

    const handleCloseModal = () => {
        setSelectedPegawai(null);
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6 ml-64">
                <HeaderHR />
                <section className="p-6 rounded-lg my-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold text-[#16423C]">HR ATTENDANCE</h2>
                    </div>
                    <div className="flex justify-between mb-4 text-[#16423C]">
                        <input 
                            type="text"
                            placeholder="Search"
                            className="p-2 border rounded-lg w-1/3 border border-[#417D7A]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <TablePegawai data={filteredData} onRowClick={handleRowClick} />
                </section>
            </div>
            {selectedPegawai && (
                <ModalDetailPegawai data={selectedPegawai} onClose={handleCloseModal} />
            )}
        </div>
    );
}

export default DataPegawai;

