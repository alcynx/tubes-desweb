// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardHR from './pages/dashboardHR';
import DashboardPe from './pages/dashboardPe';
import Login from './pages/login';
import LandingPage from './pages/landingPage'
import DataPegawai from './pages/datapegawai'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/dashboardHr" element={<DashboardHR />} />
        <Route path="/dashboardPe" element={<DashboardPe />} />
        <Route path="/datapegawai" element={<DataPegawai />} />
      </Routes>
    </Router>
  );
};

export default App;
