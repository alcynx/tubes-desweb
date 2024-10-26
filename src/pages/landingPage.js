// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
// import Footer from '../components/footer';
import Header from '../components/header-landingpage'
import Home from '../components/home'
import Fitur from '../components/fitur';
import Pengumuman from '../components/pengumuman';
import TentangKami from '../components/tentang-kami';
import Footer from '../components/footer'

const landingPage = () => {
  return (
    <div>
    <Header />
    <section id="home">
      <Home />
    </section>
    <section id="fitur">
      <Fitur />
    </section>
    <section id="pengumuman">
      <Pengumuman />
    </section>
    <section id="tentang-kami">
      <TentangKami />
    </section>
    <section id="footer">
      <Footer />
    </section>
  </div>
  );
};

export default landingPage;
