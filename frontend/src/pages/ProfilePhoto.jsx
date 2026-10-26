import { useState } from "react";

const ProfilePhoto = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <label htmlFor="profile-photo">
        <img
          src={profilePhoto || "/profile.jpg"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover cursor-pointer"
        />
      </label>

      <input
        id="profile-photo"
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        className="hidden"
      />
    </div>
  );
};

export default ProfilePhoto;
