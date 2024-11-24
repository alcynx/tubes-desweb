// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AttendanceProvider } from './components/DashboardHr/AttendanceContext'; // Pastikan path ini benar
import { EmployeeAttendanceProvider } from './components/DashboardPegawai/attendanceData'; // Pastikan path ini benar
import { AnnouncementsProvider } from './components/Pengumuman/AnnouncementsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AttendanceProvider>
            <EmployeeAttendanceProvider>
                <AnnouncementsProvider>
                    <App />
                </AnnouncementsProvider>
            </EmployeeAttendanceProvider>
        </AttendanceProvider>
    </React.StrictMode>
);
