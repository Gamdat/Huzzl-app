import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import type { ProfileData } from "../types";
import "./ProfileSetup.css";

interface ProfileSetupProps {

  onFinish: (data: ProfileData) => void;

}

const ProfileSetup: React.FC<ProfileSetupProps> = ({ onFinish }) => {
  const [profileData, setProfileData] = useState<ProfileData>({
    bio: "",
    description: "",
    document: null,
      profileImage: null,
  });


const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
    const file = e.target.files[0];
    setProfileData({
      ...profileData,
      profileImage: URL.createObjectURL(file), // preview image
    });
  }
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      document: e.target.files ? e.target.files[0] : null,
    });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFinish(profileData);
  };

  return (
<div className="page-profile">
  {/*card */}
    <div className="card">
 <div className="logo">
        <img src="/images/Logo.png" alt="logo"/>
      </div>

 <h2>Profile Setup</h2>
      <ProgressBar step={2} />

      <form onSubmit={handleSubmit}>
        <div className="profile-image-upload">

  <label htmlFor="profileImage">
    <div className="image-preview">
      {profileData.profileImage ? (
        <img src={profileData.profileImage} alt="Profile" />
      ) : (
        <span className="upload-placeholder">+</span>
      )}
    </div>
  </label>
  <input
    type="file"
    id="profileImage"
    accept="image/*"
    onChange={handleImageChange}
    style={{ display: "none" }}
  required
  />

</div>
        <label>Bio</label>
        <input
          type="text"
          name="bio"
          placeholder="Tell us about yourself.."
          value={profileData.bio}
          onChange={handleChange}
         required
        />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Enter a description..."
          value={profileData.description}
          onChange={handleChange}
            required
         />
         
 <div className="document-upload">
  <label>Business Verification Document</label>
          <label htmlFor="documentUpload" className="upload-box">
            <span className="upload-icon">📄</span>
            <span className="upload-text">
              {profileData.document
                ? profileData.document.name
                : "Upload"}
            </span>
          </label>
          <input
            type="file"
            id="documentUpload"
            accept=".pdf,.doc,.docx,.jpg,.png"
            onChange={handleFileChange}
            style={{ display: "none" }}
              required
        />
        </div>

        <button type="submit">Continue</button>
      </form>
    </div>
</div>
  );

};



export default ProfileSetup;

