// src/App.js
import React from 'react';
import DashboardHR from './konten/dashboardHR'; // Pastikan ini benar
import { AttendanceProvider } from './AttendanceContext'; // Contoh penggunaan context
import DashboardPe from './konten/dashboardPe';

function App() {
    return (
        <AttendanceProvider>
            <DashboardHR />
            <DashboardPe/>
        </AttendanceProvider>
    );
}

export default App;
