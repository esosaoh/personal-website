import React from 'react';
import type { ProfilePhotoProps } from '../types';

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