import React from 'react';
import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';

const CardSkeleton = ({ repeat = 1 }: { repeat: number }) => {
  const repeatArray = [];
  for (let i = 0; i < repeat; i++) {
    repeatArray.push(i);
  }
  return (
    <>
      {repeatArray.map((el) => {
        return (
          <Box
            key={el}
            sx={{ display: 'flex', width: '95%', padding: '5px', alignItems: 'center' }}
          >
            <Skeleton sx={{ marginRight: '5px' }} variant="circular" width={'5vh'} height={'5vh'} />
            <Skeleton variant="rectangular" width={'75%'} height={'5vh'} />
          </Box>
        );
      })}
    </>
  );
};

export default CardSkeleton;
