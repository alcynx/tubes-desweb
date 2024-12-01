// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AttendanceProvider } from './components/DashboardHr/AttendanceContext'; 
import { EmployeeAttendanceProvider } from './components/DashboardPegawai/attendanceData'; 
import { AnnouncementsProvider } from './components/Pengumuman/AnnouncementsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <EmployeeAttendanceProvider>
            <AttendanceProvider>
                <AnnouncementsProvider>
                    <App />
                </AnnouncementsProvider>
            </AttendanceProvider>
        </EmployeeAttendanceProvider>
    </React.StrictMode>
);
