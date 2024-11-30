// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardHR from "./pages/HR/dashboardHR";
import DashboardPe from "./pages/Pegawai/dashboardPe";
import Login from "./pages/login";
import LandingPage from "./pages/landingPage";
import DataPegawai from "./pages/HR/datapegawai";
import FormPengajuan from "./pages/Pegawai/formMengajukan";
import Pengajuan from "./pages/HR/daftarpengajuan";
import AnnouncementsPage from "./pages/HR/dashboardPengumuman";
import PublishedAnnouncementsPage from "./pages/HR/PublishedAnnouncementsPage";
import EditProfilePegawai from "./pages/Pegawai/EditProfilePegawai";
import PresensiPegawai from "./pages/Pegawai/presensiPegawai";
import PengumumanPegawai from "./pages/Pegawai/pengumumanPegawai";
import KelolaAbsenHr from "./pages/HR/kelolaAbsenHr";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboardHr" element={<DashboardHR />} />
        <Route path="/dashboardPe" element={<DashboardPe />} />
        <Route path="/datapegawai" element={<DataPegawai />} />
        <Route path="/formPengajuan" element={<FormPengajuan />} />
        <Route path="/editProfile" element={<EditProfilePegawai />} />
        <Route path="/daftarpengajuan" element={<Pengajuan />} />
        <Route path="/dashboardPengumuman" element={<AnnouncementsPage />} />
        <Route path="/publikasi" element={<PublishedAnnouncementsPage />} />
        <Route path="/presensiPegawai" element={<PresensiPegawai />} />
        <Route path="/pengumumanPegawai" element={<PengumumanPegawai />} />
        <Route path="/kelolaAbsenHr" element={<KelolaAbsenHr />} />
      </Routes>
    </Router>
  );
};

export default App;
