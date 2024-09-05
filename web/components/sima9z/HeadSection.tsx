import React from 'react';

import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { Theme } from '../../components/sima9z/Theme'
import ButtonLinks from '../../components/sima9z/ButtonLinks'

const HeadSection: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          position: 'relative',
          top: 0,
          bgcolor: '#D56866',
          padding: { xs: 4, sm: 8, md: 12 },
          textAlign: 'center',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontFamily: 'Comic Sans MS, Arial Rounded MT Bold, sans-serif',
            textAlign: 'center',
            width: '100%',
            fontSize: {
              xs: '3rem',
              sm: '4rem',
              md: '4rem',
              lg: '5rem', 
            },
          }}
        >
          Sima9z Page
        </Typography>
        <ButtonLinks />
      </Box>
    </ThemeProvider>
  );
};

export default HeadSection;