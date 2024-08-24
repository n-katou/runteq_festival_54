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
      <Box className="relative w-full bg-[#A1E0E6]" display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Grid container justifyContent="center" alignItems="center" className="relative w-full max-w-4xl" sx={{ minHeight: '100vh' }}>
          <MainContent />
        </Grid>
      </Box>
    </CacheProvider>
  );
}