import React from 'react';
import { singleUserData } from '../../../../interfaces/Pm-Page-types';
import MainCard from './MainCard';
import { Card } from '@mui/material';

const MainCardContainer = ({ targetedUser }: { targetedUser: singleUserData }) => (
  <Card sx={{ maxWidth: 350, position: 'relative' }}>
    <MainCard {...targetedUser} />
  </Card>
);

export default MainCardContainer;
