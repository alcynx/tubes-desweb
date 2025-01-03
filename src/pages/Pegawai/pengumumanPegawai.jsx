import React, { useState } from "react";
import HeaderPegawai from "../../components/DashboardPegawai/HeaderPegawai";
import SidebarPegawai from "../../components/DashboardPegawai/SidebarPegawai";
import { useAnnouncements } from "../../components/Pengumuman/AnnouncementsContext";

function PengumumanPegawai() {
    const { announcements } = useAnnouncements();

    const publishedAnnouncements = announcements.filter(
        (announcement) => announcement.status === "Published"
    );

    return (
        <div className="flex min-h-screen h-full font-poppins">
            <SidebarPegawai />
            <div className="flex-1 p-6 ml-64 font-poppins">
                <HeaderPegawai />
                <div className="mt-6">
                    <h1 className="text-3xl font-bold text-tertiary">
                        Pengumuman Pegawai
                    </h1>
                    <p className="text-secondary mt-2 mb-6">
                        Berikut adalah informasi terbaru terkait pengumuman kepegawaian:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 -mt-2">
                        {publishedAnnouncements.length > 0 ? (
                            publishedAnnouncements.map((announcement, index) => (
                                <PengumumanCard key={index} announcement={announcement} />
                            ))
                        ) : (
                            <p className="col-span-3 text-gray-500">
                                Tidak ada pengumuman yang tersedia saat ini.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function PengumumanCard({ announcement }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="relative border rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
                src={announcement.image || "default-image-url.jpg"}
                alt={announcement.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-bold text-tertiary mb-3">
                    {announcement.title}
                </h3>
                <p className="text-gray-600 mb-3">
                    {isExpanded
                        ? announcement.description
                        : `${announcement.description.slice(0, 100)}...`}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                    <span className="font-semibold">Tanggal:</span>{" "}
                    {announcement.date}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                    <span className="font-semibold">Kategori:</span>{" "}
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                        {announcement.category}
                    </span>
                </p>
                <button
                    onClick={toggleDescription}
                    className="px-4 py-2 bg-tertiary text-white font-medium rounded-lg hover:bg-[#133d37] transition-colors duration-300"
                >
                    {isExpanded ? "Tampilkan Lebih Sedikit" : "Baca Selengkapnya"}
                </button>
            </div>
        </div>
    );
}

export default PengumumanPegawai;
