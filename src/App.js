import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage'; 
import Login from './pages/login';
import DashboardHR from './pages/dashboardHR'; // Pastikan path-nya benar
import DashboardPe from './pages/dashboardPe';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboardHR" element={<DashboardHR />} />
        <Route path="/dashboardPe" element={<DashboardPe />} />
      </Routes>
    </Router>
  );
};

export default App;
