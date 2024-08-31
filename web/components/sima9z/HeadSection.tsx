import React from 'react';

import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { Theme } from '../../components/sima9z/Theme'

const HeadSection: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ bgcolor: '#D56866', padding: 8, textAlign: 'center', borderRadius: '10px', marginTop: 27 }}>
        <Typography variant="h2" sx={{ color: 'white', fontFamily: 'Pacifico, cursive' }}>
          Sima9z Page
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default HeadSection;