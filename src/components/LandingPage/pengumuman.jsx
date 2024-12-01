import React from "react";
import { useAnnouncements } from "../../components/Pengumuman/AnnouncementsContext";

const AnnouncementsSection = () => {
  const { announcements } = useAnnouncements();

  return (
    <div className="max-w- font-poppins mx-auto py-12 px-4 sm:px-6 lg:px-8 -mt-7">
      <h2 className="text-center text-tertiary text-3xl font-extrabold text-gray-900 mb-2">
        Pengumuman <span className="text-secondary">Popular Staff. Io</span>
      </h2>
      <p className="text-center text-tertiary mb-10">
        Temukan informasi terbaru dalam web pengumuman mengenai kepegawaian kini
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 -mt-2">
        {announcements.length > 0 ? (
          announcements
            .slice(0, 3) // Mengambil 3 data pertama
            .map((announcement, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={announcement.image}
                  alt={announcement.title}
                  className="w-full h-48 object-cover p-4"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tertiary mb-3">
                    {announcement.title}
                  </h3>
                  <p className="text-gray-600">
                    {announcement.description.length > 100
                      ? `${announcement.description.slice(0, 100)}...`
                      : announcement.description}
                  </p>
                </div>
              </div>
            ))
        ) : (
          <p className="text-center text-gray-500">
            Tidak ada pengumuman yang tersedia.
          </p>
        )}
      </div>
    </div>
  );
};

export default AnnouncementsSection;
