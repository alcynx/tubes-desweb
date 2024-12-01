import React from "react";
import Sidebar from "../../components/DashboardHr/sidebar";
import HeaderHr from "../../components/DashboardHr/header";
import AnnouncementForm from "../../components/Pengumuman/formPengumuman";

const AnnouncementsPage = () => {
  return (
    <div className="flex">
        <Sidebar />
        <div className="w-full p-8 ml-64 font-poppins">
            <HeaderHr />
            <h1 className="text-2xl font-bold text-tertiary mb-6 text-center">Pengumuman</h1>
            <AnnouncementForm />
        </div>
    </div>         
  );
};

export default AnnouncementsPage;
