import React, { useState } from "react";

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Lattema Lie",
    email: "LattemaLie@gmail.com",
    phoneNumber: "0812675463",
    password: "0014",
    birthDate: "Sangatta, 04 Juli 2000",
    domicile: "Jakarta, Indonesia",
    placement: "Work From Office",
    jobField: "Software Engineer",
    status: "Aktif",
    profilePhoto: "/images/profilephoto.png",
  });

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => setIsEditing(false);
  const handleCancelClick = () => setIsEditing(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({ ...profileData, profilePhoto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex bg-[#ffffff] h-screen">
      <Sidebar />
      <ProfileContent
        isEditing={isEditing}
        profileData={profileData}
        handleEditClick={handleEditClick}
        handleSaveClick={handleSaveClick}
        handleCancelClick={handleCancelClick}
        handleInputChange={handleInputChange}
        handlePhotoChange={handlePhotoChange}
      />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="w-20 bg-[#16423C] h-screen flex flex-col items-center py-6">
  <div className="bg-transparent p-3 rounded-lg mb-10 hover:bg-[#92c2b2] transition-colors duration-300">
    <img src="/images/home.png" alt="Home Icon" className="w-6 h-6" />
  </div>
  <div className="bg-transparent p-3 rounded-lg mt-auto hover:bg-[#A7D4C5] transition-colors duration-300">
    <img src="/images/secure.png" alt="Staff Icon" className="w-6 h-6" />
  </div>
  <div className="bg-transparent p-3 rounded-lg mt-auto hover:bg-[#A7D4C5] transition-colors duration-300">
    <img src="/images/logout.png" alt="Logout Icon" className="w-6 h-6" />
  </div>
</div>


  );
}

function ProfileContent({
  isEditing,
  profileData,
  handleEditClick,
  handleSaveClick,
  handleCancelClick,
  handleInputChange,
  handlePhotoChange,
}) {
  return (
    <div className="flex-1 p-10">
      <h2 className="text-2xl font-bold text-[#16423C]">
        <span className="block mb-1">Hi,</span>
        {profileData.firstName}
      </h2>
      <div className="mt-6 space-y-6">
        <ProfileCard
          profileData={profileData}
          isEditing={isEditing}
          handlePhotoChange={handlePhotoChange}
        />
        <PersonalInfo
          isEditing={isEditing}
          profileData={profileData}
          handleInputChange={handleInputChange}
        />
        <JobInfo
          isEditing={isEditing}
          profileData={profileData}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="mt-6">
        {isEditing ? (
          <>
            <button
              onClick={handleSaveClick}
              className="bg-[#16423C] text-white py-2 px-6 rounded hover:bg-[#C4DAD2] text-[#16423C] mr-2"
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="bg-[#E0223F] text-white py-2 px-6 rounded hover:bg-[#FFAAAA]"
            >
              Cancel
            </button>
          </>
        ) : (
          <div className="flex justify-end">
            <button
              onClick={handleEditClick}
              className="bg-transparent shadow-md border-2 border-[#417D7A] text-[#417D7A] font-bold py-2 px-6 rounded hover:bg-[#417D7A] hover:text-white"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProfileCard({ profileData, isEditing, handlePhotoChange }) {
  return (
    <div className="p-6 rounded-lg shadow-md border-2 border-[#417D7A] bg-transparent flex items-center">
      <img
        src={profileData.profilePhoto}
        alt="Profile"
        className="w-16 h-16 rounded-full"
      />
      <div className="ml-4">
        <h3 className="text-xl font-bold text-[#417D7A]">
          {profileData.firstName}
        </h3>
        <p className="font-bold text-[#909090]">ID 3208329</p>
      </div>
      {isEditing && (
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="ml-4"
        />
      )}
    </div>
  );
}

function PersonalInfo({ isEditing, profileData, handleInputChange }) {
  return (
    <div className="p-6 rounded-lg shadow-md border-2 border-[#417D7A] bg-transparent">
      <div className="flex items-center mb-4">
        <img
          src="images/information.png"
          alt="Information Icon"
          className="w-6 h-6 mr-2"
        />
        <h3 className="text-teal-700 text-lg font-bold">Informasi Pribadi</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ProfileField
          label="First Name"
          name="firstName"
          value={profileData.firstName}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
        />
        <ProfileField
          label="Password"
          name="password"
          value={profileData.password}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
        />
        <ProfileField
          label="Lahir"
          name="birthDate"
          value={profileData.birthDate}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
        />
        <ProfileField
          label="Email"
          name="email"
          value={profileData.email}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
        />
        <ProfileField
          label="Nomor HP"
          name="phoneNumber"
          value={profileData.phoneNumber}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}

function JobInfo({ isEditing, profileData, handleInputChange }) {
  return (
    <div className="p-6 rounded-lg shadow-md border-2 border-[#417D7A] bg-transparent">
      <div className="flex items-center mb-4">
        <img
          src="images/notification.png"
          alt="Notification Icon"
          className="w-6 h-6 mr-2"
        />
        <h3 className="text-teal-700 text-lg font-bold">Informasi Pekerjaan</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ProfileField
          label="Domisili"
          name="domicile"
          value={profileData.domicile}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
        />
        <ProfileField
          label="Penempatan"
          name="placement"
          value={profileData.placement}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
        />
        <ProfileField
          label="Bidang Pekerjaan"
          name="jobField"
          value={profileData.jobField}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
        />
        <ProfileField
          label="Status"
          name="status"
          value={profileData.status}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}

function ProfileField({ label, name, value, isEditing, handleInputChange }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      {isEditing ? (
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full"
        />
      ) : (
        <p className="text-md text-gray-900">{value}</p>
      )}
    </div>
  );
}

export default ProfilePage;
