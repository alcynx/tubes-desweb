import React, { createContext, useContext, useState } from 'react';

const AnnouncementsContext = createContext();

export const useAnnouncements = () => useContext(AnnouncementsContext);

export const AnnouncementsProvider = ({ children }) => {
  const [announcements, setAnnouncements] = useState(() => {
    const storedAnnouncements = localStorage.getItem("announcements");
    return storedAnnouncements ? JSON.parse(storedAnnouncements) : [];
  });

  const addAnnouncement = (newAnnouncement) => {
    const updatedAnnouncements = [
      ...announcements, 
      { ...newAnnouncement, isPublished: newAnnouncement.status === "Published" }
    ];
    setAnnouncements(updatedAnnouncements);
    localStorage.setItem("announcements", JSON.stringify(updatedAnnouncements));
  };
  
  const updateAnnouncementStatus = (index, newStatus) => {
    const updatedAnnouncements = announcements.map((announcement, i) =>
      i === index ? { ...announcement, status: newStatus } : announcement
    );
    setAnnouncements([...updatedAnnouncements]); 
    localStorage.setItem('announcements', JSON.stringify(updatedAnnouncements));
  };
  

  return (
    <AnnouncementsContext.Provider value={{ announcements, addAnnouncement, updateAnnouncementStatus }}>
      {children}
    </AnnouncementsContext.Provider>
  );
};
