import React from 'react';

interface ProfilePhotoProps {
  photoUrl: string;
  name: string;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ photoUrl, name }) => {
  return (
    <div className="profile-container">
      <div className="profile-photo">
        <img
          src={photoUrl}
          alt={`${name}'s profile`}
        />
      </div>
      <h1 className="profile-name">{name}</h1>
    </div>
  );
};