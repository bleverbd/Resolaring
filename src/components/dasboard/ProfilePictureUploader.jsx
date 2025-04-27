import React, { useState } from "react";
import profile_pic_default from "../../assets/overview/accountSetting/profile_pic.png";
import crop from "../../assets/overview/accountSetting/crop.svg";
import deleted from "../../assets/overview/accountSetting/delete.svg";

const ProfilePictureUploader = () => {
  const [profilePic, setProfilePic] = useState(profile_pic_default);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfilePic(profile_pic_default);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="relative w-[100px] h-[100px]">
        <img
          className="w-[100px] h-[100px] rounded-full object-cover"
          src={profilePic}
          alt="Profile"
        />

        {/* Upload Button */}
        <div>
          <label className="absolute top-11 left-2 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <img src={crop} alt="Upload" />
          </label>
        </div>

        {/* Delete Button */}
        <div>
          <button
            type="button"
            onClick={handleDeleteImage}
            className="absolute top-11 left-20 cursor-pointer"
          >
            <img src={deleted} alt="Delete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureUploader;
