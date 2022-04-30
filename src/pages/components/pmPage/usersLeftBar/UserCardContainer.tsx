import React from 'react';
import UserCardData from './UserCardData';
import { List } from '@mui/material';
import { minorUsersData } from '../../../../interfaces/Pm-Page-types';

const UserCardContainer = ({ users }: { users: minorUsersData[] }) => {
  return (
    <List>
      {users.map((el) => (  
        <UserCardData key={el._id} name={el.name} stack={el.stack} id={el._id}/>
      ))}
    </List>
  );
};

export default UserCardContainer;
