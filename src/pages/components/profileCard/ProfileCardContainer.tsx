import React, { useEffect } from 'react';
import ProfilePage from './ProfileCard';

const ProfilePageContainer = ({ id }: { id: string }) => {
  useEffect(() => {
    //here should be get request of users data
    console.log('URL/get method', id);
  }, [id]);
  
  return (
    <ProfilePage
      name={'Jonh'}
      role={'Developer'}
      experience={'12 month'}
      projects={['Todo', 'PM', 'Bla-bla']}
      tasks={['Do Todo', ' do PM', ' do Bla-bla']}
      stack={'TS, JS, React'}
      sideInfo={'Good guy'}
    />
  );
};

export default ProfilePageContainer;
