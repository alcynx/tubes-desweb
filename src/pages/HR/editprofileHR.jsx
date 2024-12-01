import React, { useState } from "react";
import Sidebar from "../../components/DashboardHr/sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Jason Sebastian",
    email: "JS@gmail.com",
    phoneNumber: "081234567890",
    birthDate: "South Korea, 29 February 2004",
    domicile: "Jakarta, Indonesia",
    placement: "Work From Office",
    department: "Human Resources",
    status: "Active",
    profilePhoto: "/images/PhotoHr.jpeg",
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
      <Sidebar/>
      <div className="flex-1 p-6 ml-64 font-poppins">
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
        <p className="font-bold text-[#909090]">ID 11001011</p>
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
      <FontAwesomeIcon
      icon={faCircleInfo}
      className="w-6 h-6 mr-2 text-teal-700"
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
          label="Phone Number"
          name="phoneNumber"
          value={profileData.phoneNumber}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
        />
        <ProfileField
          label="Birthdate"
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
      </div>
    </div>
  );
}

function JobInfo({ isEditing, profileData, handleInputChange }) {
  return (
    <div className="p-6 rounded-lg shadow-md border-2 border-[#417D7A] bg-transparent">
      <div className="flex items-center mb-4">
      <FontAwesomeIcon
    icon={faBell}
    className="w-6 h-6 mr-2 text-teal-700"
  />
        <h3 className="text-teal-700 text-lg font-bold">Informasi Pekerjaan</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ProfileField
          label="Domicile"
          name="domicile"
          value={profileData.domicile}
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
        <ProfileField
          label="Department"
          name="department"
          value={profileData.department}
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
