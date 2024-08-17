import { useState } from 'react';

export function useProfileImage() {
  const [profileImage, setProfileImage] = useState('/kato/profile.png');

  const toggleProfileImage = () => {
    setProfileImage((prevImage) =>
      prevImage === '/kato/profile.png' ? '/kato/profile2.png' : '/kato/profile.png'
    );
  };

  return { profileImage, toggleProfileImage };
}
