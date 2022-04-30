import React from 'react';
import { Divider, Typography } from '@mui/material';
import { displayStack } from '../../../../../functions/displayStack';

const UserInfo = ({ stack, projects }: { stack: string[]; projects: string[] }) => (
  <>
    <Typography sx={{ color: 'gray', margin: 0 }} paragraph>
      Stack:
    </Typography>
    <Typography paragraph>{displayStack(stack)}</Typography>
    <Divider />
    <Typography sx={{ color: 'gray', margin: 0 }} paragraph>
      Projects
    </Typography>
    <Typography paragraph>{displayStack(projects)}</Typography>
    <Divider />
    <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
  </>
);

export default UserInfo;
