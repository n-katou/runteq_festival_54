import React from 'react';
import { CssBaseline, Box, Grid } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import MainContent from '../components/index/MainContent';

const cache = createCache({ key: 'css', prepend: true });

export default function Home() {
  return (
    <CacheProvider value={cache}>
      <CssBaseline />
      <Box className="relative w-full min-h-screen bg-[#A1E0E6]">
        <Grid container justifyContent="center" alignItems="center" className="relative w-full h-auto max-w-4xl m-auto">
          <MainContent />
        </Grid>
      </Box>
    </CacheProvider>
  );
}