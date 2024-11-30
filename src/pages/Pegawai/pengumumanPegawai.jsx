import React from "react";
import HeaderPegawai from "../../components/DashboardPegawai/HeaderPegawai";
import SidebarPegawai from "../../components/DashboardPegawai/SidebarPegawai";
import { announcements } from "../../components/LandingPage/pengumuman";

function PengumumanPegawai() {
    return (
        <div className="flex min-h-screen h-full font-poppins">
            <SidebarPegawai />
            <div className="flex-1 p-6">
                <HeaderPegawai />
                <div className="mt-6">
                    <h1 className="text-3xl font-bold text-tertiary">
                        Pengumuman Pegawai
                    </h1>
                    <p className="text-secondary mt-2 mb-6">
                        Berikut adalah informasi terbaru terkait pengumuman kepegawaian:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 -mt-2">
                        {announcements.map((announcement, index) => (
                            <div
                                key={index}
                                className="relative border rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white"
                            >
                                {/* Badge "New" */}
                                {announcement.isNew && (
                                    <div className="absolute top-4 right-4 bg-redstat text-white text-xs px-2 py-1 rounded-full">
                                        New
                                    </div>
                                )}
                                <img
                                    src={announcement.image}
                                    alt={announcement.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-tertiary mb-3">
                                        {announcement.title}
                                    </h3>
                                    <p className="text-gray-600 mb-3 line-clamp-3">
                                        {announcement.description}
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
                                    {/* CTA Button */}
                                    <button
                                        className="px-4 py-2 bg-tertiary text-white font-medium rounded-lg hover:bg-[#133d37] transition-colors duration-300"
                                    >
                                        Baca Selengkapnya
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PengumumanPegawai;