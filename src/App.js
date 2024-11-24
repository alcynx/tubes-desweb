// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardHR from './pages/dashboardHR';
import DashboardPe from './pages/dashboardPe';
import Login from './pages/login';
import LandingPage from './pages/landingPage';
import DataPegawai from './pages/datapegawai';
import FormPengajuan from './pages/formMengajukan';
import Pengajuan from './pages/daftarpengajuan';
import AnnouncementsPage from './pages/dashboardPengumuman'
import PublishedAnnouncementsPage from './pages/PublishedAnnouncementsPage';
import PresensiPegawai from './pages/presensiPegawai';
import PengumumanPegawai from './pages/pengumumanPegawai';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/dashboardHr" element={<DashboardHR />} />
        <Route path="/dashboardPe" element={<DashboardPe />} />
        <Route path="/datapegawai" element={<DataPegawai />} />
        <Route path="/formPengajuan" element={<FormPengajuan />} />
        <Route path="/daftarpengajuan" element={<Pengajuan />} />
        <Route path="/dashboardPengumuman" element={<AnnouncementsPage />} />
        <Route path="/publikasi" element={<PublishedAnnouncementsPage />} />
        <Route path="/presensiPegawai" element={<PresensiPegawai />} />
        <Route path="/pengumumanPegawai" element={<PengumumanPegawai />} />
      </Routes>
    </Router>
  );
};

export default App;
