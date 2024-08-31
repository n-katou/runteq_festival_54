import React from 'react';
import Image from 'next/image';

import { Box, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D56866',
    },
    secondary: {
      main: '#a3d9a5',
    },
  },
  typography: {
    fontFamily: 'Pacifico, cursive',
  },
});

const headSection: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor: '#D56866', padding: 8, textAlign: 'center', borderRadius: '10px', marginTop: 27 }}>
          <Typography variant="h2" sx={{ color: 'white', fontFamily: 'Pacifico, cursive' }}>
            Sima9z Page
          </Typography>
          <Box sx={{ marginTop: 4 }}>
            <Button variant="contained" color="secondary" sx={{ marginRight: 2 }} href="https://github.com/sima9z" target="_blank" rel="noopener noreferrer">
              github
            </Button>
            <Button variant="outlined" color="secondary" href="https://x.com/sima9z77407" target="_blank" rel="noopener noreferrer">
              X
            </Button>
          </Box>
        </Box>
        </ThemeProvider>
      );
    };

export default headSection;