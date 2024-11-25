import React, { createContext, useContext, useState } from 'react';

const AnnouncementsContext = createContext();

export const useAnnouncements = () => useContext(AnnouncementsContext);

export const AnnouncementsProvider = ({ children }) => {
  const [announcements, setAnnouncements] = useState([]);

  const addAnnouncement = (newAnnouncement) => {
    setAnnouncements([...announcements, newAnnouncement]);
  };

  return (
    <AnnouncementsContext.Provider value={{ announcements, addAnnouncement }}>
      {children}
    </AnnouncementsContext.Provider>
  );
};
