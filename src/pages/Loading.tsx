import React from 'react';
import { Box, LinearProgress, Stack, Skeleton } from '@mui/material';

const Loading = (): JSX.Element => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />

      <Stack spacing={1} className="mx-auto lg:w-[1024px] w-[100%] p-4">
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Box className="grid grid-cols-2 gap-4">
          <Skeleton variant="rounded" height="150px" />
          <Skeleton variant="rounded" height="150px" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Loading;
