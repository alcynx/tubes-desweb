import React from 'react';

export const announcements = [
  {
    title: 'Absensi kini telah baru !',
    description: 'Pengoptimalan kini dilakukan guna menambah kemudahan pegawai',
    image: '/images/laporan-absensi.png', // Path gambar
  },
  {
    title: 'Peraturan baru jam kerja karyawan.',
    description: 'Jam kerja karyawan ini lebih cepat dari biasanya, dimulai dari pukul 8:00',
    image: '/images/peraturan.png', // Path gambar
  },
  {
    title: 'Mekanisme pengajuan dari pegawai perusahaan',
    description: 'Mekanisme pengajuan dari pegawai dibuat lebih fleksibel dan mudah',
    image: '/images/mekanisme.png', // Path gambar
  },
];

const AnnouncementsSection = () => {
  return (
    <div className="max-w- font-poppins mx-auto py-12 px-4 sm:px-6 lg:px-8 -mt-7 ">
      <h2 className="text-center text-tertiary text-3xl font-extrabold text-gray-900 mb-2">
        Pengumuman <span className="text-secondary">Popular Staff. Io</span>
      </h2>
      <p className="text-center text-tertiary  mb-10">
        Temukan informasi terbaru dalam web pengumuman mengenai kepegawaian kini
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 -mt-2">
        {announcements.map((announcement, index) => (
          <div key={index} className="border rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src={announcement.image} alt={announcement.title} className="w-full h-48 object-cover p-4" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-tertiary mb-3">{announcement.title}</h3>
              <p className="text-gray-600">{announcement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsSection;
