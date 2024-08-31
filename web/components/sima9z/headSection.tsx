import React from 'react';

import { Box, Typography, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { Theme } from './Theme'

const HeadSection: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ bgcolor: '#D56866', padding: 8, textAlign: 'center', borderRadius: '10px', marginTop: 27 }}>
        <Typography variant="h2" sx={{ color: 'white', fontFamily: 'Pacifico, cursive' }}>
          Sima9z Page
        </Typography>
        <Box sx={{ marginTop: 4 }}>
          <Button variant="contained" color="secondary" sx={{ marginRight: 2 }} href="https://github.com/sima9z">
            github
          </Button>
          <Button variant="outlined" color="secondary" href="https://x.com/sima9z77407">
            X
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HeadSection;