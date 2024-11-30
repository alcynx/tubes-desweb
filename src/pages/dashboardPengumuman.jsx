import React from "react";
import Sidebar from "../components/DashboardHr/sidebar";
import HeaderHr from "../components/DashboardHr/header";
import AnnouncementForm from "../components/Pengumuman/formPengumuman";

const AnnouncementsPage = () => {
  return (
    <div className="flex min-h-screen">
        <Sidebar />
        <div className="w-full p-8">
            <HeaderHr />
            <h1 className="text-green-900 font-bold mb-4 mt-8">PENGUMUMAN</h1>
            <AnnouncementForm />
        </div>
    </div>         
  );
};

export default AnnouncementsPage;
