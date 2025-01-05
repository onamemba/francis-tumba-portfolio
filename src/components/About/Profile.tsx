import React from 'react';
import ProfileText from './ProfileText';
import ProfileImage from './ProfileImage';

const Profile = () => {
  return (
    <div className="space-y-6">
      <ProfileText />
      <ProfileImage />
    </div>
  );
};

export default Profile;