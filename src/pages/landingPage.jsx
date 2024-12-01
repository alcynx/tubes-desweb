import React from 'react';
import Header from '../components/LandingPage/header-landingpage'
import Home from '../components/LandingPage/home'
import Fitur from '../components/LandingPage/fitur';
import Pengumuman from '../components/LandingPage/pengumuman';
import TentangKami from '../components/LandingPage/tentang-kami';
import Footer from '../components/LandingPage/footer'

const LandingPage = () => {
  return (
    <div className='font-poppins'>
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

export default LandingPage;
