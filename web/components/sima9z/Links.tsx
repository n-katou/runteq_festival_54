import React from 'react';
import { Button, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { ProfileSectionTheme } from './Theme'

const Links = () => {
  return (
    <ThemeProvider theme={ProfileSectionTheme}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 4 }}>
          <Box
            component="a"
            href="https://github.com/sima9z"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: 'none', marginRight: 2}}
          >
            <Button variant="contained" color="secondary" sx={{ zIndex: 20 }}>
              github
            </Button>
          </Box>
          
          <Box
            component="a"
            href="https://x.com/sima9z77407"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: 'none' }}
          >
            <Button variant="outlined" color="secondary" sx={{ zIndex: 20 }}>
              X
            </Button>
          </Box>
        </Box>
    </ThemeProvider>
  );
};

export default Links;