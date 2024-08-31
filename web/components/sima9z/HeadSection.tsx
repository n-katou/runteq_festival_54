import React from 'react';

import { Box, Typography } from '@mui/material';
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
          </Box>
        </ThemeProvider>
      );
    };

export default headSection;