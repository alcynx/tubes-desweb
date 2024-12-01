import React, { useState } from "react";
import { MdCloudDownload } from "react-icons/md";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const DownloadButton = ({ attendanceData }) => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDownloadClick = () => {
        setShowConfirm(true);
    };

    const handleConfirmDownload = () => {
        setShowConfirm(false);
        downloadAsPDF();
    };

    const handleCancelDownload = () => {
        setShowConfirm(false);
    };

    const downloadAsPDF = () => {
        const pdf = new jsPDF();
    
        pdf.setFontSize(16);
        pdf.text("Laporan Kehadiran", 10, 10);
    
        const tableData = attendanceData.map((item) => [
            item.date,
            item.name,
            item.role,
            item.status,
            item.masuk,
            item.keluar,
            item.lembur,
        ]);
    
        pdf.autoTable({
            head: [["Tanggal", "Nama", "Jabatan", "Status", "Masuk", "Keluar", "Lembur"]],
            body: tableData,
            startY: 20,
            headStyles: {
                fillColor: "#C4DAD2", 
                textColor: "#16423C",
                fontSize: 12,
                fontStyle: "bold",
            },
            bodyStyles: {
                textColor: [31, 41, 55], 
                fontSize: 10,
            },
            alternateRowStyles: {
                fillColor: [243, 244, 246], 
            },
        });
    
        pdf.save("attendance.pdf");
    };
    

    return (
        <div>
            <button
                className="inline-flex font-poppins items-center border border-secondary rounded-md p-2 space-x-2 text-secondary"
                onClick={handleDownloadClick}
            >
                <MdCloudDownload className="text-2xl" />
                <span className="text-basic">Unduh</span>
            </button>

            {showConfirm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-lg">Apakah kamu yakin ingin mendownload data?</h2>
                        <div className="flex space-x-4 mt-4 justify-center ">
                            <button
                                className="bg-tertiary text-white p-2 px-8 rounded-full hover:bg-secondary"
                                onClick={handleConfirmDownload}
                            >
                                Ya
                            </button>
                            <button
                                className="border border-tertiary text-tertiary p-2 px-5 rounded-full hover:bg-secondary hover:text-white"
                                onClick={handleCancelDownload}
                            >
                                Tidak
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DownloadButton;
