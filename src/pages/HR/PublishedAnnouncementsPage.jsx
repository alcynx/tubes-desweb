import React, { useState } from "react";
import { useAnnouncements } from "../../components/Pengumuman/AnnouncementsContext";
import Sidebar from "../../components/DashboardHr/sidebar";
import HeaderHr from "../../components/DashboardHr/header";

const PublishedAnnouncementsPage = () => {
  const { announcements, updateAnnouncementStatus } = useAnnouncements(); 
  const [activeTab, setActiveTab] = useState("Published"); 

  const drafts = announcements.filter((announcement) => announcement.status === "Draft");
  const published = announcements.filter((announcement) => announcement.status === "Published");

  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full p-8 ml-64">
        <HeaderHr />
        <h1 className="text-[#16423C] font-bold text-2xl mb-8 mt-8">Pengumuman</h1>

        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-[10px] ${
              activeTab === "Published" ? "bg-[#417D7A] text-white" : "bg-gray-300"
            } rounded`}
            onClick={() => setActiveTab("Published")}
          >
            Published
          </button>
          <button
            className={`px-4 py-2 rounded-[10px] ${
              activeTab === "Draft" ? "bg-[#417D7A]  text-white" : "bg-gray-300"
            } rounded`}
            onClick={() => setActiveTab("Draft")}
          >
            Draft
          </button>
        </div>

        {activeTab === "Published" && (
          <div>
            {published.length > 0 ? (
              <div className="space-y-6">
                {published.map((announcement, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C4DAD2]"
                  >
                    {announcement.image && (
                      <img
                        src={announcement.image || "default-image-url.jpg"}
                        alt={announcement.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
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
        )}

        {activeTab === "Draft" && (
          <div>
            {drafts.length > 0 ? (
              <div className="space-y-6">
                {drafts.map((announcement, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500"
                  >
                    {announcement.image && (
                      <img
                        src={announcement.image || "default-image-url.jpg"}
                        alt={announcement.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    <h2 className="text-xl font-semibold text-[#16423C]">{announcement.title}</h2>
                    <p className="text-gray-700 mt-2">{announcement.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-500">{announcement.date}</span>
                      <span className="text-sm text-yellow-500">{announcement.category}</span>
                    </div>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-700"
                      onClick={() => {
                        const originalIndex = announcements.findIndex((ann) => ann === announcement);
                        updateAnnouncementStatus(originalIndex, "Published");
                      }}
                    >
                      Publikasikan
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Belum ada pengumuman dalam draf.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PublishedAnnouncementsPage;
