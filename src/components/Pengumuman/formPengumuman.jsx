import React, { useState } from "react";
import { useAnnouncements } from "./AnnouncementsContext"; 
import ConfirmationModal from "./konfirmasi"; 

const AnnouncementForm = () => {
  const [status, setStatus] = useState("public");
  const [showModal, setShowModal] = useState(false);
  const { addAnnouncement } = useAnnouncements(); 

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("umum");

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  const handleSimpan = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);

    const newAnnouncement = {
      title: title, 
      description: description,
      date: date, 
      category: category, 
      status: status === "public" ? "Public" : "Draft",
    };

    addAnnouncement(newAnnouncement);

    alert(`Pengumuman berhasil disimpan sebagai ${status === "public" ? "Public" : "Draft"}`);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-[#417D7A] mb-4">Judul</label>
        <input 
          type="text" 
          className="w-full border border border-[#16423C] rounded-[10px] p-2"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      <div>
        <label className="block text-[#417D7A] mb-4 mt-6">Deskripsi</label>
        <textarea 
          className="w-full border border border-[#16423C] rounded-[10px] p-2 h-24"
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
        ></textarea>
      </div>
      <div>
        <label className="block text-[#417D7A] mb-4 mt-6">Tanggal</label>
        <input 
          type="date" 
          className="w-full border border border-[#16423C] rounded-[10px] p-2 text-[#16423C]"
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
      </div>
      <div>
        <label className="block text-[#417D7A] mb-4 mt-6">Kategori</label>
        <select 
          className="w-full border border-[#16423C] rounded-[10px] p-2 text-[#16423C]"
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
        >
          <option value="kebijakan">Kebijakan</option>
          <option value="acara">Acara</option>
          <option value="umum">Umum</option>
        </select>
      </div>
      <div>
        <label className="block text-[#417D7A] mb-4 mt-6">Status Publikasi</label>
        <div className="flex items-center space-x-4 text-[#16423C]">
          <label className="flex items-center">
            <input
              type="radio"
              className="mr-2"
              onChange={() => handleStatusChange("public")}
              checked={status === "public"}
            />
            Public
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              className="mr-2"
              onChange={() => handleStatusChange("draft")}
              checked={status === "draft"}
            />
            Draf
          </label>
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-6">
        <button type="reset" className="bg-[#E0223F] text-white rounded-[60px] px-4 py-2">Batal</button>
        <button
          type="button"
          className="bg-[#C4DAD2] text-[#16423C] rounded-[60px] px-4 py-2"
          onClick={handleSimpan}
        >
          Simpan
        </button>
      </div>
      {showModal && (
        <ConfirmationModal
          status={status}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </form>
  );
};

export default AnnouncementForm;
