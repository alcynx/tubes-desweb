// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AttendanceProvider } from './AttendanceContext'; // Impor AttendanceProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AttendanceProvider>
        <App />
    </AttendanceProvider>
);
