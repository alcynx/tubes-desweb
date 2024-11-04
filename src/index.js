import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AttendanceProvider } from './AttendanceContext';
import { EmployeeAttendanceProvider } from './components/attendanceData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AttendanceProvider>
        <EmployeeAttendanceProvider>
            <App />
        </EmployeeAttendanceProvider>
    </AttendanceProvider>
);
