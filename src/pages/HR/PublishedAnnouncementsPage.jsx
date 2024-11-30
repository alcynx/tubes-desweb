import React from "react";
import { useAnnouncements } from "../../components/Pengumuman/AnnouncementsContext";
import Sidebar from "../../components/DashboardHr/sidebar"; 
import HeaderHr from "../../components/DashboardHr/header";

const PublishedAnnouncementsPage = () => {
  const { announcements } = useAnnouncements(); 

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="w-full p-8">
        <HeaderHr />
        <h1 className="text-green-900 font-bold text-2xl mb-8 mt-8">Pengumuman Terbit</h1>
        {announcements.length > 0 ? (
          <div className="space-y-6">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500"
              >
                <h2 className="text-xl font-semibold text-[#16423C]">{announcement.title}</h2>
                <p className="text-gray-700 mt-2">{announcement.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">{announcement.date}</span>
                  <span className="text-sm text-green-500">{announcement.category}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Belum ada pengumuman yang dipublikasikan.</p>
        )}
      </div>
    </div>
  );
};

export default PublishedAnnouncementsPage;
