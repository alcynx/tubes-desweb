// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AttendanceProvider } from './components/DashboardHr/AttendanceContext'; // Pastikan path ini benar
import { EmployeeAttendanceProvider } from './components/DashboardPegawai/attendanceData'; // Pastikan path ini benar

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AttendanceProvider>
            <EmployeeAttendanceProvider>
                <App />
            </EmployeeAttendanceProvider>
        </AttendanceProvider>
    </React.StrictMode>
);
